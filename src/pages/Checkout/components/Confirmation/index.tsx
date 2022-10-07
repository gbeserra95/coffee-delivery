import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Item } from '../Item'
import * as S from './styles'

export function Confirmation() {
  const { items } = useContext(CartContext)

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
          <span>R$ 9,90</span>
        </S.Subtotal>
        <S.Subtotal>
          Entrega
          <span>R$ 3,50</span>
        </S.Subtotal>
        <S.Total>
          <span>Total</span>
          <span>R$ 3,50</span>
        </S.Total>
      </div>
      <S.ConfirmButton type="submit">Confirmar Pedido</S.ConfirmButton>
    </S.Container>
  )
}
