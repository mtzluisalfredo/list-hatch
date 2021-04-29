import React, {useState} from 'react';
import {ScreenView, Input, Buttom} from '../../components';

const Detail = () => {
  const [newTask, setNewTask] = useState('');

  return (
    <ScreenView
      scrollView
      renderView={({addItem, pop = () => {}}) => {
        return (
          <>
            <Input
              title="Tarea"
              value={newTask}
              multiline
              onChangeText={(e) => setNewTask(e)}
              placeholder="Escriba la descripción de la tarea..."
            />
            <Buttom
              disabled={!newTask.length}
              label="Guardar"
              onPress={() => {
                addItem(newTask);
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
