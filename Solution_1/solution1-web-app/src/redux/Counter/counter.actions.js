import { INCREMENT, DECREMENT, STORE_COLOR } from './counter.types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};

export const storeColor = (color) => {
  return {
    type: STORE_COLOR,
    payload: color
  }
}