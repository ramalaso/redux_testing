import {createStore} from 'redux'

export const increaseCount = (amount = 1) => ({
   type: 'INCREASE_AMOUNT',
   payload: amount
})

const DEFAULT_STATE = {
   count: 0,
}

export function reducer(state = DEFAULT_STATE, action={}) {
   switch (action.type) {
      case 'INCREASE_AMOUNT':
         return {
            ...state,
            count: state.count+action.payload
         }
      default:
         return state;
   }
}

export const store = createStore(reducer);
