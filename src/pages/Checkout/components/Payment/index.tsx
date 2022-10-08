import React, { useContext } from 'react'
import { DeliveryContext } from '../../../../contexts/DeliveryContext'

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import * as S from './styles'

export function Payment() {
  const { paymentType, handlePayment } = useContext(DeliveryContext)

  function handlePaymentMethod(
    event: React.MouseEvent<HTMLButtonElement>,
    paymentMethod: typeof paymentType,
  ) {
    event.preventDefault()
    handlePayment(paymentMethod)
  }

  return (
    <S.Container>
      <S.Title>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
      </S.Title>
      <S.Buttons>
        <S.PaymentButton
          onClick={(event) => handlePaymentMethod(event, 'creditCard')}
          selected={paymentType === 'creditCard'}
        >
          <CreditCard size={16} />
          Cartão de Crédito
        </S.PaymentButton>
        <S.PaymentButton
          onClick={(event) => handlePaymentMethod(event, 'debitCard')}
          selected={paymentType === 'debitCard'}
        >
          <Bank size={16} />
          Cartão de Débito
        </S.PaymentButton>
        <S.PaymentButton
          onClick={(event) => handlePaymentMethod(event, 'cash')}
          selected={paymentType === 'cash'}
        >
          <Money size={16} />
          Dinheiro
        </S.PaymentButton>
      </S.Buttons>
    </S.Container>
  )
}
