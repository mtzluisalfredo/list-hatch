import React from 'react';
import {ScreenView, Item} from '../../components';

const Detail = ({componentId}) => {
  return (
    <ScreenView
      scrollView
      componentId={componentId}
      renderView={({list = {}}) => {
        const {itemsList = []} = list;
        return itemsList.map(({task}) => {
          return <Item title={task} />;
        });
      }}
    />
  );
};

export default Detail;
