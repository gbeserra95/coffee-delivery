import { useEffect, createContext, useReducer, ReactNode } from 'react'
import { Item, cartReducer } from '../reducers/cart/reducer'
import {
  addNewItemAction,
  clearCartAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CartContextType {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (item: Item) => void
  clearCart: () => void
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

  const { items } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    sessionStorage.setItem(
      `@ignite-coffee-delivery:cart-state-1.0.0`,
      stateJSON,
    )
  }, [cartState])

  function addItemToCart(item: Item) {
    const cartId = String(new Date().getTime())

    const newItem: Item = {
      id: item.id,
      cartId,
      categories: item.categories,
      name: item.name,
      description: item.description,
      image: item.image,
      price: item.price,
    }

    dispatch(addNewItemAction(newItem))
  }

  function removeItemFromCart(item: Item) {
    dispatch(removeItemAction(item))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
