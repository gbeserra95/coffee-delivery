import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

export function incrementItemAction(itemId: number) {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementItemAction(itemId: number) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}
