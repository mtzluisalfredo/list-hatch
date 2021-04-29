import React, {useState} from 'react';
import {Platform, Alert, Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {ScreenView, Input, Buttom} from '../../components';

const Detail = () => {
  const OS = Platform.OS.toUpperCase();
  const isIos = Platform.OS === 'ios';
  const [newTask, setNewTask] = useState('');
  const [coords, serCoords] = useState(null);
  Geolocation.getCurrentPosition((info) => {
    console.log(info);
    serCoords(info.coords);
  });
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
                const onSuccess = () => {
                  addItem(newTask, coords);
                  pop();
                };
                const permission =
                  PERMISSIONS[OS][
                    isIos ? 'LOCATION_WHEN_IN_USE' : 'ACCESS_COARSE_LOCATION'
                  ];
                check(permission).then((result) => {
                  if (result === RESULTS.DENIED) {
                    request(permission).then(
                      (data) => data === RESULTS.GRANTED && onSuccess(),
                    );
                  } else if (!isIos) {
                    console.log('TCL ~ isIos', isIos);
                    if (coords) {
                      onSuccess();
                    }
                  } else if (result === RESULTS.GRANTED) {
                    onSuccess();
                  } else if (result === RESULTS.UNAVAILABLE) {
                    Alert.alert(
                      'Lo sentimos',
                      'Necesitas activar el servicio de ubicación"',
                      [
                        {text: 'Cancelar'},
                        {
                          text: 'Turn On Location',
                          onPress: Linking.openSettings,
                        },
                      ],
                    );
                  } else if (result === RESULTS.BLOCKED) {
                    Alert.alert(
                      'Lo sentimos',
                      'Has bloqueado esta acción antes de esta....',
                      [
                        {text: 'Cancel'},
                        {
                          text: 'Permitir permiso de ubicación ',
                          onPress: Linking.openSettings,
                        },
                      ],
                    );
                  }
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
