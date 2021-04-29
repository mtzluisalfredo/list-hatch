import React from 'react';
import {
  useNavigationButtonPress,
  showModal,
} from 'react-native-navigation-hooks';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: '#ececec',
    padding: 16,
  },
});

const SafeArea = (props) => {
  useNavigationButtonPress((e) => {
    console.log('TCL ~ e', e);
    showModal('Detail', {}, {});
  });
  const {children} = props;
  return <SafeAreaView style={styles.bgc}>{children}</SafeAreaView>;
};

const ScreenView = (props) => {
  const {renderView = () => null, scrollView = false, state} = props;
  const renderChildren = renderView({...state});

  if (scrollView) {
    return (
      <SafeArea>
        <ScrollView>{renderChildren}</ScrollView>
      </SafeArea>
    );
  }

  return <SafeArea>{renderChildren}</SafeArea>;
};

const mapStateToProps = (state) => {
  console.log('TCL ~ state', state);
  return {state: state};
};

const actions = {};

export default connect(mapStateToProps, actions)(ScreenView);
