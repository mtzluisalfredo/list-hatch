import {createTypes} from '../../utils/types';

export const types = createTypes('app', 'ADD_ITEM');

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
export const addItem = (task) => {
  console.log('TCL ~ task', task);
  const item = {
    task,
    status: 'active',
    createAt: new Date(),
  };
  return {
    type: types.ADD_ITEM,
    item,
  };
};
