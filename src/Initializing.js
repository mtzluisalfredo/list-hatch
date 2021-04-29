import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {goHome} from './utils/navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Initializing = () => {
  console.log('TCL ~ Initializing');
  const initApp = () => {
    console.log('TCL ~ initApp');
    goHome();
  };

  useEffect(() => initApp(), []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Loading...</Text>
    </SafeAreaView>
  );
};

export default Initializing;
