import React, { useState, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import { Minus, Plus, Trash } from 'phosphor-react'
import * as S from './styles'
interface ItemProps {
  itemId: number
  name: string
  image: string
  price: number
  quantity: number
}

export function Item({ itemId, name, image, price, quantity }: ItemProps) {
  const { incrementItem, decrementItem, removeItemFromCart } =
    useContext(CartContext)
  const [counter, setCounter] = useState(quantity)

  function incrementCounter(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setCounter((state) => state + 1)
    incrementItem(itemId)
  }

  function decrementCounter(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (counter > 1) {
      setCounter((state) => state - 1)
      decrementItem(itemId)
    }
  }

  function removeItem(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    removeItemFromCart(itemId)
  }

  const counterIsOne = counter === 1

  return (
    <S.ItemContainer>
      <S.SelectedItem>
        <img src={image} alt="" />
        <S.ItemDescription>
          <span>{name}</span>
          <div>
            <S.QuantityButton>
              <button onClick={decrementCounter} disabled={counterIsOne}>
                <Minus size={14} />
              </button>
              {counter}
              <button onClick={incrementCounter}>
                <Plus size={14} />
              </button>
            </S.QuantityButton>
            <S.RemoveButton onClick={removeItem}>
              <Trash size={14} />
              Remover
            </S.RemoveButton>
          </div>
        </S.ItemDescription>
      </S.SelectedItem>
      <S.Price>
        R$ {String((price * quantity).toFixed(2)).replace('.', ',')}
      </S.Price>
    </S.ItemContainer>
  )
}
