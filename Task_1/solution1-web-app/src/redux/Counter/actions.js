import { STORE_COLOR } from './types';

export const storeColor = (color) => {
  return {
    type: STORE_COLOR,
    payload: color
  }
}