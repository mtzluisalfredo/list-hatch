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
        const {list = {}, updateTask = () => {}, pop = () => {}} = propsView;
        const {taskActive = {}, isUpdate = false} = list;
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
            {isUpdate ? (
              <Buttom
                type={'update'}
                disabled={false}
                label="Actualizar"
                onPress={() => {
                  updateTask({
                    ...taskActive,
                    task: newText,
                  });
                  pop();
                }}
              />
            ) : null}
            <Buttom
              type={'done'}
              disabled={false}
              label="Completar"
              onPress={() => {
                updateTask({
                  ...taskActive,
                  status: 'completed',
                  task: newText,
                });
                pop();
              }}
            />
            <Buttom
              type={'cancel'}
              disabled={false}
              label="Cancelar"
              onPress={() => {
                updateTask({
                  ...taskActive,
                  status: 'cancel',
                  task: newText,
                });
                pop();
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Detail;
