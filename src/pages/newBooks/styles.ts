import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { lighten } from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f2f2f2;
`;

export const BookList = styled(FlatList as new () => FlatList<String[]>)``;

export const Text = styled.Text`
   color: #555963;
   font-size: 24px;
   font-weight: bold;
   text-align: center;
`;

export const BtnTouchableOpacity = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 10px;
  margin: 8px;
  background: ${lighten(0.10, '#f2f2f2')};
`;
