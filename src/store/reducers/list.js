// - Tarea (Texto)
// - Estatus (Activo, Completado, Cancelado)
// - Fecha y hora de Creación (Fecha Hora)
// - Última Fecha y hora de modificación (Fecha Hora)
// - Ubicacion (Objeto { lat: , lng: })


const initialState = {
  itemsList: [
    {
      task: 'Luis',
      status: '12-12-12',
      createAt: '-',
      updatedAt: '--',
      location: '--',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
