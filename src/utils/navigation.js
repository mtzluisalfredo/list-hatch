import React from 'react';
import {Navigation} from 'react-native-navigation';

export const registerScreen = (screenName, Component) => {
  Navigation.registerComponent(
    screenName,
    () => (props) => {
      return <Component {...props} />;
    },
    () => Component,
  );
};

export const setRoot = (type, id, children) => {
  console.log('TCL ~ children', children);
  return Navigation.setRoot({
    root: {
      [type]: {
        id,
        children,
      },
    },
  });
};

export const goHome = () =>
  setRoot('stack', 'List', [
    {
      component: {
        name: 'List',
        options: {
          topBar: {
            title: {
              text: 'List',
            },
          },
        },
      },
    },
  ]);
