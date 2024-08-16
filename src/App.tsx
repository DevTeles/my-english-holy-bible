import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import { BibleProvider } from './contexts/bible';

const App: React.FC = () => {
  return (
    <BibleProvider>
      <StatusBar backgroundColor="#555963" barStyle="dark-content" />
      <Routes />
    </BibleProvider>
  );
};

export default App;
