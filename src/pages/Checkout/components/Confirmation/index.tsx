import { useFormContext } from 'react-hook-form'

import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { DeliveryContext } from '../../../../contexts/DeliveryContext'

import { Item } from '../Item'

import * as S from './styles'

export function Confirmation() {
  const { items, subtotal, total } = useContext(CartContext)
  const { deliveryPrice, paymentError } = useContext(DeliveryContext)

  const {
    formState: { errors },
  } = useFormContext()

  return (
    <S.Container>
      <ul>
        {items.map((item) => (
          <Item
            key={item.name}
            itemId={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
      <div>
        <S.Subtotal>
          Total de itens
          <span>R$ {String(subtotal.toFixed(2)).replace('.', ',')}</span>
        </S.Subtotal>
        <S.Subtotal>
          Entrega
          <span>R$ {String(deliveryPrice.toFixed(2)).replace('.', ',')}</span>
        </S.Subtotal>
        <S.Total>
          <span>Total</span>
          <span>R$ {String(total.toFixed(2)).replace('.', ',')}</span>
        </S.Total>
      </div>
      <S.ConfirmButton type="submit">Confirmar Pedido</S.ConfirmButton>
      <S.ErrorMessage>
        {paymentError && <span>* {paymentError}</span>}
      </S.ErrorMessage>
    </S.Container>
  )
}
