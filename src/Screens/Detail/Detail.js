import React, {useState} from 'react';
import {ScreenView, Input, Buttom} from '../../components';

const Detail = () => {
  const [task, setTask] = useState('i');

  return (
    <ScreenView
      scrollView
      renderView={() => {
        return (
          <>
            <Input
              title="Tarea"
              value={task}
              multiline
              onChangeText={(e) => setTask(e)}
              placeholder="Escriba la descripción de la tarea..."
            />
            <Buttom
              label="Guardar"
              onPress={() => {
                console.log('TCL ~ Buttom', task);
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Detail;
