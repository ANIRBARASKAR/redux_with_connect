// actions.js
import { INCREMENT, DECREMENT } from './constants';

export const increment = () =>{
    alert("Hello anir")


    return {
        type: INCREMENT,
      }
}

export const decrement = () => ({
  type: DECREMENT,
});