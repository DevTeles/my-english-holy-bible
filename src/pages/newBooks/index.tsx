import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, BookList, Text, BtnTouchableOpacity } from './styles';
import api from '../../services/api';
import { BibleContext } from '../../contexts/bible';
import Constants from 'expo-constants';

const NewBooks: React.FC = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState<String[][]>([]);

  const { handleCurrentBook } = useContext(BibleContext);
  const apiKey = Constants.expoConfig?.extra?.apiKey ?? '';
  const apiHost = Constants.expoConfig?.extra?.apiHost ?? '';

  useEffect(() => {
    api.get('GetBooks', {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost,
        'useQueryString': true
      }
    }).then(response => {
      const arrayOld = response.data.The_New_Testament.split('. ');
      const arrayFormatted = arrayOld.map((item: string) => {
        if (item != 'Revelation')
          return item.slice(0, -2).trim()
        else return item;
      });

      // delete first empty
      arrayFormatted.shift();
      setBooks(arrayFormatted);
    });
  }, []);

  const handleBook = async (book: string) => {
    handleCurrentBook(book);
    navigation.navigate('BookChapter');
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
        <Icon name="arrow-left" size={26} color="#555963" />
      </TouchableOpacity>

      {books.length > 0 ? (
        <BookList
          data={books}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <BtnTouchableOpacity onPress={() => handleBook(item.toString())}>
                <Text>{item}</Text>
            </BtnTouchableOpacity>
          )}
        />
      ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator size="large" color="#555963" />
            <Text>Loading...</Text>
          </View>
        )}      
    </Container>
  )
}

export default NewBooks;
