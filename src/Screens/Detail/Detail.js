/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ScreenView, Input, Buttom, ToggleComponent} from '../../components';

const Detail = (props) => {
console.log('TCL ~ DetailDetail', props);
  const {updateTask} = props;
  useEffect(
    () => () => {
      console.log('unmount');
      updateTask(false);
    },
    [],
  );
  return (
    <ScreenView
      scrollView
      renderView={(propsView) => {
        const {list = {}} = propsView;
        const {taskActive = {}, isUpdate = false} = list;
        console.log('TCL ~ isUpdate', isUpdate);
        console.log('TCL ~ propsView', propsView);
        return (
          <>
            <ToggleComponent
              condition={isUpdate}
              principal={() => {
                return <Buttom />;
              }}
              secondary={() => {
                return (
                  <Input
                    title="Tarea"
                    value={taskActive.task}
                    multiline
                    onChangeText={(e) => console.log(e)}
                    placeholder="Escriba la descripción de la tarea..."
                  />
                );
              }}
            />
            <Buttom
              type={'done'}
              label="Completar"
              onPress={() => {
                console.log('Luis');
              }}
            />
            <Buttom
              type={'cancel'}
              label="Cancelar"
              onPress={() => {
                console.log('Luis');
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Detail;
