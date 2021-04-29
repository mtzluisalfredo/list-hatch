import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {NavigationProvider} from 'react-native-navigation-hooks';
import configureStore from '../store/configureStore';

const store = configureStore();

export const registerScreen = (screenName, Component) => {
  Navigation.registerComponent(
    screenName,
    () => (props) => {
      return (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <Component {...props} />
          </NavigationProvider>
        </Provider>
      );
    },
    () => Component,
  );
};

export const setRoot = (type, id, children) => {
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
