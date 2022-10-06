import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import deliverySuccessImage from '../../assets/illustration.svg'
import * as S from './styles'

export function Success() {
  return (
    <main>
      <S.Title>
        <h1>Uhu! Pedido confirmado!</h1>
        <span>Agora é só aguardar que logo o café chegará até você.</span>
      </S.Title>
      <S.Content>
        <S.InfoContainer>
          <S.Info>
            <S.Icon bg="purple">
              <MapPin size={16} />
            </S.Icon>
            <S.Text>
              Entrega em <span>Rua João Daniel Martinelli, 102</span>
              <br />
              Farrapos - Porto Alegre, RS
            </S.Text>
          </S.Info>
          <S.Info>
            <S.Icon bg="yellow">
              <Timer size={16} />
            </S.Icon>
            <S.Text>
              Previsão de entrega
              <br />
              <span>20 min - 30 min</span>
            </S.Text>
          </S.Info>
          <S.Info>
            <S.Icon bg="yellowDark">
              <CurrencyDollar size={16} />
            </S.Icon>
            <S.Text>
              Pagamento na entrega
              <br />
              <span>Cartão de Crédito</span>
            </S.Text>
          </S.Info>
        </S.InfoContainer>
        <img src={deliverySuccessImage} alt="" />
      </S.Content>
    </main>
  )
}
