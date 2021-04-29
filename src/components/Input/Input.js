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
  const styles = StyleSheet.create({
    input: {
      height: multiline ? 100 : 36,
      textAlignVertical: 'top',
      padding: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      backgroundColor: 'white',
    },
    textPlaceholder: {
      fontWeight: '100',
      fontSize: 19,
    },
    container : {
      padding: 16,
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textPlaceholder}>{title}</Text>
      <TextInput
        numberOfLines={multiline ? 5 : 1}
        style={styles.input}
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

export default Input;
