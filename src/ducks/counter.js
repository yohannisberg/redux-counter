// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

// const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
// const DECREMENT_NUMBER = 'DECREMENT_NUMBER';

const CHANGE_NUMBER = 'CHANGE_NUMBER';

const initialState = {
  number: 0
}

// The initial state below is an ES6 thing that will make state initialState the default value
export default function reducer(state=initialState, action) {
  console.log('from the counter', action.payload)
  switch(action.type) {
    case CHANGE_NUMBER:

      return Object.assign({}, state, {number: action.payload})

  default:
    return state
  }
}

// function changeNumber(newNumber) {
//   return {
//     type: CHANGE_NUMBER,
//     payload: newNumber
//   }
// }

export function changeNumber(newNumber) {
  return {
    type: CHANGE_NUMBER,
    payload: newNumber
  }
}
