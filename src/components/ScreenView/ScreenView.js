import React from 'react';
import {useNavigation} from 'react-native-navigation-hooks';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import * as listActions from '../../store/actions';
import SafeArea from './SafeArea';

const ScreenView = (props) => {
  const {push} = useNavigation();
  const {
    renderView = () => null,
    scrollView = false,
    state,
    componentId,
    addItem,
    setTask,
    updateTask,
  } = props;
  const renderChildren = renderView({
    ...state,
    addItem,
    push,
    setTask,
    updateTask,
  });

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
