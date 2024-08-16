import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Chapter, BtnTouchableOpacity, TextTitle } from './styles';
import { TotalChapter } from '../../TotalChapter';
import { FlatList } from 'react-native-gesture-handler';
import { BibleContext } from '../../contexts/bible';

const BookChapter: React.FC = () => {

  const [arrayTotalChapter, setArrayTotalChapter] = useState<number[]>([]);

  const navigation = useNavigation();
  const { currentbook, handleCurrentChapter } = useContext(BibleContext);

  useEffect(() => {
    function load() {
      const total = TotalChapter.filter(book => book.name === currentbook)[0].total;
      const arrayTotal = [];

      for (let i = 1; i <= total; i++) {
        arrayTotal.push(i);
      }
      setArrayTotalChapter(arrayTotal);
    }
    
     load();
  }, []);

  const handleOpenBookChapter = useCallback( async (chapter: number) => {
    handleCurrentChapter(chapter);
    navigation.navigate('Text');
  }, []);

  return (
    <Container>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
          <Icon name="arrow-left" size={26} color="#000" />         
        </TouchableOpacity>
        <TextTitle>{currentbook}</TextTitle>
        <TouchableOpacity disabled={true} style={{ padding: 10, }}>
          <Icon name="arrow-left" size={26} color="#f2f2f2" />         
        </TouchableOpacity>
      </View>      

      <FlatList
        numColumns={5}
        data={arrayTotalChapter}
        keyExtractor={(item) => item.toString()}
        renderItem={(item) => (
           <Chapter>
             <BtnTouchableOpacity onPress={() => handleOpenBookChapter(item.item)}>
                <Text>{item.item}</Text>
             </BtnTouchableOpacity>
           </Chapter>
        )}
      />

    </Container>
  )
}

export default BookChapter;
