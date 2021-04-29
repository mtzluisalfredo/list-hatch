import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ScreenView, Item} from '../../components';
import {orderListTask} from '../../utils';

const styles = StyleSheet.create({
  btnfilter: {
    backgroundColor: '#dadbe2',
    marginRight: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 6,
  },
  wrapper: {marginHorizontal: 8, height: 40, marginBottom: 12},
});

const Detail = ({componentId}) => {
  return (
    <ScreenView
      scrollView
      titleView="Lista de tareas"
      renderHeader={(propsHeader) => {
        const {state = {}} = propsHeader;
        const {list = {}} = state;
        const {itemsList = []} = list;
        console.log('TCL ~ state', state);
        console.log('TCL ~ propsHeader', propsHeader);
        // active
        // completed
        if (!orderListTask(itemsList).length) {
          return (
            <View style={styles.wrapper}>
              <Text>Lista vacia</Text>
            </View>
          );
        }
        return (
          <View style={styles.wrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {[
                {
                  label: 'Completadas',
                  status: 'completed',
                },
                {
                  label: 'Activas',
                  status: 'active',
                },
              ].map(({label}) => {
                return (
                  <TouchableOpacity style={styles.btnfilter}>
                    <Text>{label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      }}
      componentId={componentId}
      renderView={(props) => {
        const {
          list = {},
          push = () => {},
          setTask = () => {},
          setIsUpdate = () => {},
        } = props;
        const {itemsList = []} = list;
        return (
          <>
            {orderListTask(itemsList).map((task) => {
              return (
                <>
                  <Item
                    item={task}
                    onPress={() => {
                      setTask(task);
                      push(
                        'Detail',
                        {setIsUpdate},
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
