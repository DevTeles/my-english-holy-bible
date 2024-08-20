import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

export const TextTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: black;
  padding-bottom: 8px;
  color: #555963;
`;

export const Text = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #f2f2f2;
`;

export const Chapter = styled.View`
  flex-wrap: wrap;
`

export const BtnTouchableOpacity = styled.TouchableOpacity`
  background: #555963;
  width: 60px;
  margin: 8px;
  border-radius: 8px;
`;
