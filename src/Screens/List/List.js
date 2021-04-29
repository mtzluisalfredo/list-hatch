import React from 'react';
import {Text, View} from 'react-native';
import {ScreenView, Item} from '../../components';

const Detail = ({componentId}) => {
  return (
    <ScreenView
      scrollView
      componentId={componentId}
      renderView={(props) => {
      console.log('TCL ~ updateTaskupdateTaskupdateTask', props);
        const {
          list = {},
          push = () => {},
          setTask = () => {},
          updateTask = () => {},
        } = props;
        const {itemsList = []} = list;
        return (
          <>
            <View>
              <View>
                <Text>Filtros</Text>
              </View>
            </View>
            {itemsList.map((task) => {
              return (
                <>
                  <Item
                    item={task}
                    onPress={() => {
                      setTask(task);
                      push(
                        'Detail',
                        {updateTask},
                        {
                          topBar: {
                            title: {
                              text: 'Detalle de tarea',
                            },
                            noBorder: true,
                            visible: true,
                            transparent: true,
                            translucent: true,
                            background: {color: 'white'},
                            elevation: 0,
                            rightButtons: [
                              {
                                id: 'edit',
                                text: 'Editar',
                              },
                            ],
                          },
                        },
                      );
                    }}
                  />
                </>
              );
            })}
          </>
        );
      }}
    />
  );
};

export default Detail;
