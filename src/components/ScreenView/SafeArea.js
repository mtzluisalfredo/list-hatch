import React from 'react';
import {
  useNavigationButtonPress,
  useNavigation,
} from 'react-native-navigation-hooks';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as listActions from '../../store/actions';

const styles = StyleSheet.create({
  bgc: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const SafeArea = (props) => {
  const {setIsUpdate} = props;
  const {push} = useNavigation();
  useNavigationButtonPress(({buttonId}) => {
    // se pretende que aqui se defina el modal a mostrar
    if (buttonId === 'add') {
      push('AddTask');
    }
    if (buttonId === 'edit') {
      setIsUpdate(true);
    }
  });
  const {children} = props;
  return <SafeAreaView style={styles.bgc}>{children}</SafeAreaView>;
};

const mapStateToProps = () => {
  return {};
};

const actions = {...listActions};

export default connect(mapStateToProps, actions)(SafeArea);
