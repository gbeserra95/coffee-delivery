import { ActionTypes } from './actions'
import { Coffee } from '../../utils/data'

export interface Item extends Coffee {
  quantity: number
}

interface CartState {
  items: Item[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      }
    }
    case ActionTypes.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }
    case ActionTypes.CLEAR_CART: {
      return {
        ...state,
        items: [],
      }
    }
    case ActionTypes.INCREMENT_ITEM: {
      const itemToIncrement = state.items.find(
        (item) => item.id === action.payload,
      )

      itemToIncrement!.quantity++

      return {
        ...state,
        items: [...state.items, itemToIncrement],
      }
    }
    case ActionTypes.DECREMENT_ITEM: {
      const itemToDecrement = state.items.find(
        (item) => item.id === action.payload,
      )

      itemToDecrement!.quantity--

      return {
        ...state,
        items: [...state.items, itemToDecrement],
      }
    }
    default:
      return state
  }
}
