import { TOGGLE_MODAL } from "../actions/types";

const initialState = {
  show: false,
};

const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        show: !action.payload.show,
      };
    default:
      return state;
  }
};

export default componentReducer;
