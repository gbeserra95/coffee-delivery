import { Item } from '../Item'
import * as S from './styles'

export function Confirmation() {
  return (
    <S.Container>
      <ul>
        <Item />
        <Item />
      </ul>
      <div>
        <S.Subtotal>
          Total de itens
          <span>R$ 29,70</span>
        </S.Subtotal>
        <S.Subtotal>
          Entrega
          <span>R$ 3,50</span>
        </S.Subtotal>
        <S.Total>
          <span>Total</span>
          <span>R$ 33,20</span>
        </S.Total>
      </div>
      <S.ConfirmButton type="submit">Confirmar Pedido</S.ConfirmButton>
    </S.Container>
  )
}
