import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from 'react'

import { Item, cartReducer } from '../reducers/cart/reducer'
import {
  addNewItemAction,
  removeItemAction,
  clearCartAction,
  incrementItemAction,
  decrementItemAction,
} from '../reducers/cart/actions'

import { DeliveryContext } from './DeliveryContext'

interface CartContextType {
  items: Item[]
  subtotal: number
  total: number
  addItemToCart: (item: Item) => void
  removeItemFromCart: (itemId: number) => void
  clearCart: () => void
  incrementItem: (itemId: number) => void
  decrementItem: (itemId: number) => void
}

interface CartContextProviderPros {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderPros) {
  const INITIAL_STATE = {
    items: [],
  }

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    () => {
      const storedStateAsJSON = sessionStorage.getItem(
        `@ignite-coffee-delivery:cart-state-1.0.0`,
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return INITIAL_STATE
    },
  )

  const { deliveryPrice } = useContext(DeliveryContext)

  const { items } = cartState

  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  const total = subtotal + deliveryPrice

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    sessionStorage.setItem(
      `@ignite-coffee-delivery:cart-state-1.0.0`,
      stateJSON,
    )
  }, [cartState])

  function addItemToCart(item: Item) {
    const newItem: Item = {
      id: item.id,
      categories: item.categories,
      name: item.name,
      description: item.description,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    }

    dispatch(addNewItemAction(newItem))
  }

  function removeItemFromCart(itemId: number) {
    dispatch(removeItemAction(itemId))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  function incrementItem(itemId: number) {
    dispatch(incrementItemAction(itemId))
  }

  function decrementItem(itemId: number) {
    dispatch(decrementItemAction(itemId))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        total,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
