/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  ScreenView,
  Input,
  Buttom,
  ToggleComponent,
  Item,
} from '../../components';

const Detail = (props) => {
  console.log('TCL ~ DetailDetail', props);
  const [editTask, serEditTask] = useState('');
  const {setIsUpdate} = props;
  useEffect(
    () => () => {
      setIsUpdate(false);
    },
    [],
  );
  return (
    <ScreenView
      scrollView
      renderView={(propsView) => {
        const {list = {}, updateTask = () => {}} = propsView;
        const {taskActive = {}, isUpdate = false} = list;
        console.log('TCL ~ isUpdate', isUpdate);
        console.log('TCL ~ propsView', propsView);
        const newText = editTask || taskActive.task;
        return (
          <>
            <View style={{height: 200}}>
              <ToggleComponent
                condition={!isUpdate}
                principal={() => {
                  return <Item isDetail item={taskActive} />;
                }}
                secondary={() => {
                  return (
                    <Input
                      title="Tarea"
                      value={newText}
                      multiline
                      onChangeText={(e) => serEditTask(e)}
                      placeholder="Escriba la descripción de la tarea..."
                    />
                  );
                }}
              />
            </View>
            <Buttom
              type={'done'}
              disabled={false}
              label="Completar"
              onPress={() => {
                console.log('TCL ~ onPress');
                updateTask({
                  ...taskActive,
                  status: 'completed',
                  task: newText,
                });
              }}
            />
            <Buttom
              type={'cancel'}
              disabled={false}
              label="Cancelar"
              onPress={() => {
                console.log('TCL ~ onPress');
                updateTask({
                  ...taskActive,
                  status: 'cancel',
                  task: newText,
                });
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Detail;
