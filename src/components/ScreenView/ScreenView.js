import React from 'react';
import {useNavigation} from 'react-native-navigation-hooks';
import {connect} from 'react-redux';
import {ScrollView, View, Text} from 'react-native';
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
    setIsUpdate,
    updateTask,
    titleView = '',
    renderHeader = null,
  } = props;
  const renderChildren = renderView({
    ...state,
    addItem,
    push,
    setTask,
    setIsUpdate,
    updateTask,
  });

  if (scrollView) {
    return (
      <SafeArea componentId={componentId}>
        <View>
          {!titleView ? null : (
            <View style={{padding: 8}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {titleView}
              </Text>
            </View>
          )}
          {renderHeader ? <View>{renderHeader(props)}</View> : null}
        </View>
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
