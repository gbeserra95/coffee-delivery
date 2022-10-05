import { Address } from './components/Address'
import { Confirmation } from './components/Confirmation'
import { Payment } from './components/Payment'

import * as S from './styles'

export function Checkout() {
  return (
    <main>
      <S.CheckoutContainer>
        <S.LeftFormContainer>
          <h2>Complete seu pedido</h2>
          <Address />
          <Payment />
        </S.LeftFormContainer>
        <S.RightFormContainer>
          <h2>Cafés selecionados</h2>
          <Confirmation />
        </S.RightFormContainer>
      </S.CheckoutContainer>
    </main>
  )
}
