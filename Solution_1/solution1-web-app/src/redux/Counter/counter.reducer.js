import { STORE_COLOR } from './counter.types';


const initialState = {
    colors_order: []
};

const storeColor = (state, payload) => {

  colors_order = state.colors_order.append(payload);

  return Object.assign({}, state, {
    colors_order = colors_order
  });
};

const reducer = (state = initialState, {type, payload = null}) => {

    switch (type) {
        case STORE_COLOR:
          return storeColor(state, payload);

         default:
          return state;
    }
};

export default reducer;