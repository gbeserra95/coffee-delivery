import { ActionTypes } from './actions'
import { Coffee } from '../../utils/data'

export interface Item extends Coffee {
  cartId: string
}

interface CartState {
  items: Item[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      }
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload.item),
      }
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}
