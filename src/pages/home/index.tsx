import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Container, BtnNew, BtnOld, OldTestament, NewTestament } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BtnOld onPress={() => navigation.navigate('OldBooks')}>
          <OldTestament>Old Testament</OldTestament>
      </BtnOld>

      <BtnNew onPress={() => navigation.navigate('NewBooks')}>
          <NewTestament>New Testament</NewTestament>
      </BtnNew>
    </Container>
  )
}

export default Home;
