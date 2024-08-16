import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { BibleContext } from '../../contexts/bible';
import { Container, BookList, Text, BtnTouchableOpacity } from './styles';
import api from '../../services/api';

const OldBooks: React.FC = () => {
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
      const arrayOld = response.data.The_Old_Testament.split('. ');
      const arrayFormatted = arrayOld.map((item: string) => {
        if (item != 'Malachi')
          return item.slice(0, -2).trim()
        else return item;
      });
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
        <Icon name="arrow-left" size={26} color="#f2f2f2" />
      </TouchableOpacity>

    {books.length > 0 ? (
      <BookList
      data={books}
      keyExtractor={(item: { toString: () => any; }) => item.toString()}
      renderItem={({ item }: { item: string }) => (
        <BtnTouchableOpacity onPress={() => handleBook(item.toString())}>
            <Text>{item}</Text>
        </BtnTouchableOpacity>
      )}
    />
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text>Loading...</Text>
      </View>
    )}
      
    </Container>
  )
}

export default OldBooks;
