import {types} from '../actions/listActions';

const initialState = {
  itemsList: [],
  taskActive: {},
  isUpdate: false,
};
const {ADD_ITEM, SET_TASK, SET_IS_UPDATE_TASK, UPDATE_TASK} = types;

const reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemsList: payload.itemsList,
        // ...itemsList, tambien puede ser de esta forma
      };
    case SET_TASK:
      return {
        ...state,
        taskActive: payload.taskActive,
      };
    case SET_IS_UPDATE_TASK:
      return {
        ...state,
        isUpdate: payload.isUpdate,
      };
    case UPDATE_TASK:
      return {
        ...state,
        itemsList: payload.itemsList,
      };
    default:
      return state;
  }
};

export default reducer;
