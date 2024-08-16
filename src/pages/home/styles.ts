import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   background: #f2f2f2;
`;

export const BtnOld = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #555963;
`;

export const BtnNew = styled.TouchableOpacity`
   flex: 1;
   justify-content: center;
   align-items: center;
   background: #f2f2f2;
`;

export const OldTestament = styled.Text`
  color: #f2f2f2;
  font-size: 52px;
`;

export const NewTestament = styled.Text`
  color: #555963;
  font-size: 52px;
`;
