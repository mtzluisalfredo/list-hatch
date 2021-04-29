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
