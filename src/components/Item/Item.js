/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {dateLocale} from '../../utils/dates';
import {hexToRgbA, labelStatus} from '../../utils';

const Item = (props) => {
  const {item, onPress = () => {}} = props;
  const {task = '', createAt = '', status = '', updatedAt = ''} = item;

  return (
    <TouchableOpacity
      style={styles(props).container}
      onPress={() => {
        onPress();
      }}>
      <View style={styles(props).wrapperStatus}>
        <View>
          <Text style={styles(props).status}>{labelStatus(status)}</Text>
        </View>
      </View>
      <View style={styles(props).wrapperTitle}>
        <View style={styles(props).badge} />
        <View style={{height: 50}}>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            {task}
          </Text>
        </View>
      </View>
      <View style={styles(props).wrapperTask}>
        <View>
          <Text style={styles(props).dates}>{`Creada: ${dateLocale(
            createAt,
          )}`}</Text>
        </View>
        <View>
          <Text style={styles(props).dates}>
            {!updatedAt ? '' : `Actualizada: ${dateLocale(updatedAt)}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({isDetail, item = {}}) => {
  const {status} = item;
  let colorBtn = '#f9be7c';
  switch (status) {
    case 'active':
      colorBtn = '#6488e4';
      break;
    case 'completed':
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
      borderLeftWidth: isDetail ? 0 : 4,
      borderLeftColor: colorBtn,
      marginHorizontal: 8,
      marginVertical: 4,
      backgroundColor: hexToRgbA(colorBtn, '0.2'),
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
      color: colorBtn,
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
      backgroundColor: colorBtn,
    },
  });
};

export default Item;
