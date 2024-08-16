import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { lighten } from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #555963;
`;

export const BookList = styled(FlatList as new () => FlatList<String[]>)``;

export const Text = styled.Text`
   color: #f2f2f2;
   font-size: 24px;
   font-weight: bold;
   text-align: center;
`;

export const BtnTouchableOpacity = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 10px;
  margin: 8px;
  background: ${lighten(0.10, '#555963')};
`;
