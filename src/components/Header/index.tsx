import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { DeliveryContext } from '../../contexts/DeliveryContext'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  const { items } = useContext(CartContext)
  const { address } = useContext(DeliveryContext)

  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <S.ActionsContainer>
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          {address.city}, {address.state}
        </S.LocationButton>
        <NavLink to="/checkout">
          <S.CartButton>
            {items.length !== 0 && (
              <S.CartCounter>{items.length}</S.CartCounter>
            )}
            <ShoppingCart size={22} weight="fill" />
          </S.CartButton>
        </NavLink>
      </S.ActionsContainer>
    </S.HeaderContainer>
  )
}
