import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

export const registerScreen = (screenName, Component) => {
  Navigation.registerComponent(
    screenName,
    () => (props) => {
      return (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );
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
  setRoot('stack', 'Home', [
    {
      component: {
        name: 'List',
        options: {
          topBar: {
            title: {
              text: 'List',
            },
            rightButtons: [
              {
                id: 'add',
                text: 'Agregar',
              },
            ],
          },
        },
      },
    },
  ]);
