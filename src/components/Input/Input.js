import React from 'react';
import {View, TextInput, Platform, Text, StyleSheet} from 'react-native';

const Input = (props) => {
  const {
    editable = true,
    title = '',
    value = '',
    placeholder = '',
    multiline = false,
    onChangeText = () => {},
  } = props;
  return (
    <View style={styles(props).container}>
      <Text style={styles(props).title}>{title}</Text>
      <TextInput
        numberOfLines={multiline ? 5 : 1}
        style={styles(props).input}
        editable={editable}
        multiline={multiline}
        placeholder={placeholder}
        onChangeText={(e) => onChangeText(e)}
        value={value}
        padding={8}
      />
    </View>
  );
};

const styles = ({multiline}) => {
  const isIos = Platform.OS === 'ios';
  return StyleSheet.create({
    input: {
      height: multiline ? 100 : 36,
      textAlignVertical: 'top',
      padding: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      backgroundColor: 'white',
    },
    title: {
      fontWeight: isIos ? '400' : '100',
      fontSize: 19,
      color: '#4d4d4d',
    },
    container: {
      padding: 16,
    },
  });
};

export default Input;
