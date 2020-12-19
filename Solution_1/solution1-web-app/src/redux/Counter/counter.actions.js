import { STORE_COLOR } from './counter.types';

export const storeColor = (color) => {
  return {
    type: STORE_COLOR,
    payload: color
  }
}