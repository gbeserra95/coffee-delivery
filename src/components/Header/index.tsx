import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <S.ActionsContainer>
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </S.LocationButton>
        <S.CartButton>
          <ShoppingCart size={22} weight="fill" />
        </S.CartButton>
      </S.ActionsContainer>
    </S.HeaderContainer>
  )
}
