import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(item: Item) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
