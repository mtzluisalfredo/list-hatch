/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {dateLocale} from '../../utils/dates';

const Item = ({item, onPress = () => {}}) => {
  const {task = '', createAt = ''} = item;
  return (
    <TouchableOpacity
      style={styles().container}
      onPress={() => {
        onPress();
      }}>
      <View style={styles().wrapperStatus}>
        <View>
          <Text style={styles().status}>Activa</Text>
        </View>
      </View>
      <View style={styles().wrapperTitle}>
        <View style={styles().badge} />
        <View style={{height: 50}}>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            {task}
          </Text>
        </View>
      </View>
      <View style={styles().wrapperTask}>
        <View>
          <Text style={styles().dates}>{`Creada: ${dateLocale(
            createAt,
          )}`}</Text>
        </View>
        <View>
          <Text style={styles().dates}>{`Actualizada: ${dateLocale(
            createAt,
          )}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = () => {
  return StyleSheet.create({
    container: {
      borderLeftWidth: 4,
      borderLeftColor: '#5b62ce',
      marginHorizontal: 8,
      marginVertical: 4,
      backgroundColor: '#eff0fb',
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
    wrapperTitle: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    wrapperTask: {
      paddingLeft: 14,
      bottom: -18,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    wrapperStatus: {
      top: -18,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    status: {
      color: '#5b62ce',
      fontWeight: 'bold',
    },
    dates: {
      fontSize: 12,
      color: 'gray',
    },
    badge: {
      top: 4,
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 4,
      backgroundColor: '#5b62ce',
    },
  });
};

export default Item;
