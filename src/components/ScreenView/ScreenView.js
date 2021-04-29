import React from 'react';
import {
  useNavigationButtonPress,
  useNavigation,
} from 'react-native-navigation-hooks';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import * as listActions from '../../store/actions';

const styles = StyleSheet.create({
  bgc: {
    flex: 1,
    backgroundColor: '#ececec',
  },
});

const SafeArea = (props) => {
  const {push} = useNavigation();
  useNavigationButtonPress(({buttonId}) => {
    let viewModal = '';
    // se pretende que aqui se defina el modal a mostrar
    if (buttonId === 'add') {
      viewModal = 'Detail';
    }
    push(viewModal, {myProp: 'value'});
  });
  const {children} = props;
  return <SafeAreaView style={styles.bgc}>{children}</SafeAreaView>;
};

const ScreenView = (props) => {
  const {
    renderView = () => null,
    scrollView = false,
    state,
    componentId,
    addItem,
  } = props;
  const renderChildren = renderView({...state, addItem});

  if (scrollView) {
    return (
      <SafeArea componentId={componentId}>
        <ScrollView>{renderChildren}</ScrollView>
      </SafeArea>
    );
  }

  return <SafeArea componentId={componentId}>{renderChildren}</SafeArea>;
};

const mapStateToProps = (state) => {
  return {state: state};
};

const actions = {...listActions};

export default connect(mapStateToProps, actions)(ScreenView);
