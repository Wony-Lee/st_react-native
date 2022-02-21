/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  const [changeBorder, setChangeBorder] = useState(false);
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount(prev => (prev += 1));
  }, []);

  const handleChangeBorder = useCallback(() => {
    setChangeBorder(prev => (prev = !prev));
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text onPress={handleIncrease}>Hello World</Text>
        <Text>{count}</Text>
        <Greeting />
        <Box rounded={changeBorder} size={'large'} />
        <Text onPress={handleChangeBorder}>HandleChange</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
