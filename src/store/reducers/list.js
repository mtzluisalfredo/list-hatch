const initialState = {
  itemsList: [
    {
      title: 'Luis',
      create: '12-12-12',
    },
    {
      title: 'Alfredo',
      create: '12-12-12',
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
