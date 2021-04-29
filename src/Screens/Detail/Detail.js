import React from 'react';
import {Text} from 'react-native';
import {ScreenView} from '../../components';

const Detail = () => {
  return (
    <ScreenView
      scrollView
      renderView={() => {
        return (
          <>
            <Text>Detalle</Text>
          </>
        );
      }}
    />
  );
};

export default Detail;
