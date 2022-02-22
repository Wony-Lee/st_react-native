/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';

import {
  Button,
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
import Counter from './components/Counter';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [changeBorder, setChangeBorder] = useState(false);
  const handleToggle = useCallback(() => {
    setVisible(prev => (prev = !prev));
  }, []);
  const handleChangeBorder = useCallback(() => {
    setChangeBorder(prev => (prev = !prev));
  }, []);
  return (
    <SafeAreaView style={styles.full}>
      <Counter />
      <View>
        <Greeting />
        {visible && <Box rounded={changeBorder} size={'large'} />}
        <Text onPress={handleChangeBorder}>HandleChange</Text>
        <Button title="클릭" onPress={handleToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
