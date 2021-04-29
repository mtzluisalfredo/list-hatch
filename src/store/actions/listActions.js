import {createTypes} from '../../utils/types';
import moment from 'moment';

export const types = createTypes(
  'app',
  'ADD_ITEM',
  'SET_TASK',
  'SET_IS_UPDATE_TASK',
  'UPDATE_TASK',
);

// - Tarea (Texto)
// - Estatus (Activo, Completado, Cancelado)
// - Fecha y hora de Creación (Fecha Hora)
// - Última Fecha y hora de modificación (Fecha Hora)
// - Ubicacion (Objeto { lat: , lng: })
// task: 'Luis',
// status: '12-12-12',
// createAt: '-',
// updatedAt: '--',
// location: '--',

export const addItem = (task) => (dispatch, getState) => {
  const {list = {}} = getState();
  const {itemsList = []} = list;
  const item = {
    task,
    status: 'active',
    createAt: moment().format(),
    updatedAt: '',
    location: '',
    id: moment().valueOf(),
  };

  return dispatch({
    type: types.ADD_ITEM,
    payload: {itemsList: itemsList.concat(item)},
  });
};

export const setTask = (task) => (dispatch, getState) => {
  return dispatch({
    type: types.SET_TASK,
    payload: {taskActive: task},
  });
};

export const setIsUpdate = (isUpdate) => (dispatch, getState) => {
  return dispatch({
    type: types.SET_IS_UPDATE_TASK,
    payload: {isUpdate},
  });
};

export const updateTask = (task) => (dispatch, getState) => {
  console.log('TCL ~ task', task);
  const taskTemp = {...task, updatedAt: moment().format()};
  const {list = {}} = getState();
  const {itemsList = []} = list;

  const listTemp = itemsList.map((e) => (e.id !== task.id ? e : taskTemp));

  return dispatch({
    type: types.UPDATE_TASK,
    payload: {itemsList: listTemp},
  });
};
