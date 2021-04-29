import React from 'react';
import {View, Platform, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Buttom = (props) => {
  const {onPress = () => {}, label = ''} = props;
  return (
    <View style={styles(props).container}>
      <TouchableOpacity style={styles().btn} onPress={() => onPress()}>
        <Text style={styles().text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = () => {
  const isIos = Platform.OS === 'ios';
  return StyleSheet.create({
    container: {
      padding: 16,
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#2b7488',
      padding: 10,
    },
    text: {
      fontWeight: isIos ? '400' : '100',
      fontSize: 19,
      color: 'white',
    },
  });
};

export default Buttom;
