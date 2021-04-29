import React from 'react';
import {ScreenView, Item} from '../../components';

const Detail = () => {
  return (
    <ScreenView
      scrollView
      renderView={({list = {}}) => {
        const {itemsList = []} = list;
        return itemsList.map(({title}) => {
          return <Item title={title} />;
        });
      }}
    />
  );
};

export default Detail;
