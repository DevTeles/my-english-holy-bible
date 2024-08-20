import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextTitle, TextRN, ViewTitle, ScrollViewRN, Title  } from './styles';
import api from '../../services/api';
import { BibleContext } from '../../contexts/bible';
import { ActivityIndicator, View, Text as TextRNative } from 'react-native';
import Constants from 'expo-constants';

const Text: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const { currentbook, currentChapter, totalChapter, handleCurrentChapter } = useContext(BibleContext);

  const apiKey = Constants.expoConfig?.extra?.apiKey ?? '';
  const apiHost = Constants.expoConfig?.extra?.apiHost ?? '';

  useEffect(() => {
    async function load() {
      setLoading(true);
      const response = await api.get('GetChapter', {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost,
          'useQueryString': true
        },
        params: {
          book: currentbook === 'Acts (of the Apostles)' ? 'Acts' : currentbook,
          chapter: currentChapter
        }
      });

      setText(response.data.Output);
      setLoading(false);
    }

    load();
  }, [currentbook, currentChapter, text]);

  const handlePrevChapter = useCallback(() => {
    handleCurrentChapter(currentChapter - 1);
  }, [currentChapter]);

  const handleNextChapter = useCallback(() => {
    handleCurrentChapter(currentChapter + 1)
  }, [currentChapter]);

  return (
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>        
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
            <Icon name="arrow-left" size={26} color="#f2f2f2" />
          </TouchableOpacity>
          <Title>{currentbook}</Title>          
        </View>   

        <ViewTitle>
          {
            currentChapter > 1 ? (
              <TouchableOpacity onPress={() => handlePrevChapter()} style={{ padding: 10 }}>
                  <Icon name="chevron-left" size={26} color="#f2f2f2" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{ padding: 10 }}>
                  <Icon name="chevron-left" size={26} color="#c2c2c2" />
              </TouchableOpacity>
            )
          }
          <TextTitle>{currentChapter}</TextTitle>

          {
            currentChapter < totalChapter ? (
              <TouchableOpacity onPress={() => handleNextChapter()} style={{ padding: 10 }}>
                <Icon name="chevron-right" size={26} color="#f2f2f2" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{ padding: 10 }}>
                <Icon name="chevron-right" size={26} color="#c2c2c2" />
              </TouchableOpacity>
            )
          }
        </ViewTitle>

        <View style={{ height: 'auto', justifyContent: 'flex-end' }}>          
          <ScrollViewRN>
              {!loading ? (
                <TextRN>{text}</TextRN>
              ): (
                <View style={{ marginTop: '67%' }}>
                  <ActivityIndicator size="large" color="#555963" />
                  <TextRNative style={{ textAlign: 'center' }}>Loading...</TextRNative>
                </View>
              )}
          </ScrollViewRN>          
        </View>         
      </Container>
    )
}

export default Text;
