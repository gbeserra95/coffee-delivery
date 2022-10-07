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
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      }
    }
    case ActionTypes.CLEAR_CART: {
      return {
        ...state,
        items: [],
      }
    }
    case ActionTypes.INCREMENT_ITEM: {
      const updatedState = state.items.map((item) => {
        if (item.id === action.payload.itemId)
          return { ...item, quantity: item.quantity + 1 }

        return item
      })

      return {
        ...state,
        items: updatedState,
      }
    }
    case ActionTypes.DECREMENT_ITEM: {
      const updatedState = state.items.map((item) => {
        if (item.id === action.payload.itemId)
          return { ...item, quantity: item.quantity - 1 }

        return item
      })

      return {
        ...state,
        items: updatedState,
      }
    }
    default:
      return state
  }
}
