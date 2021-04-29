import React from 'react';
import {View, Platform, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Buttom = (props) => {
  const {onPress = () => {}, label = '', disabled = true} = props;
  return (
    <View style={styles(props).container}>
      <TouchableOpacity
        disabled={disabled}
        style={styles(props).btn}
        onPress={() => onPress()}>
        <Text style={styles(props).text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ({disabled, type = ''}) => {
  const isIos = Platform.OS === 'ios';
  let colorBtn = '#f9be7c';
  switch (type) {
    case 'update':
      colorBtn = '#6488e4';
      break;
    case 'done':
      colorBtn = '#309397';
      break;
    case 'cancel':
      colorBtn = '#e46472';
      break;
    default:
      colorBtn = '#f9be7c';
  }

  return StyleSheet.create({
    container: {
      padding: 16,
    },
    btn: {
      alignItems: 'center',
      backgroundColor: disabled ? 'gray' : colorBtn,
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
