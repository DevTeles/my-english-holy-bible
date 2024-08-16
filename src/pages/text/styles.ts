import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
    background: #555963;
    padding-bottom: 100px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #f2f2f2;
`;

export const TextTitle = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #f2f2f2;
`;

export const TextRN = styled.Text`
  font-size: 20px;
  color: #555963;
  padding-left: 20px;
  text-align: auto;
  margin-right: 12px;
  padding: 20px;
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin: 12px;
`;

export const ScrollViewRN = styled.ScrollView`
  margin: 12px;
  padding: 10px;
  border-radius: 10px;
  background: #f2f2f2;  
  height: ${height-220}px;
`;
