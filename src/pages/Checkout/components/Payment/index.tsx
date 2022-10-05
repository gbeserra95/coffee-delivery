import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import * as S from './styles'

export function Payment() {
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
        <button>
          <CreditCard size={16} />
          Cartão de Crédito
        </button>
        <button>
          <Bank size={16} />
          Cartão de Débito
        </button>
        <button>
          <Money size={16} />
          Dinheiro
        </button>
      </S.Buttons>
    </S.Container>
  )
}
