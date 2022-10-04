import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import coffeeImage from '../../assets/coffee.svg'
import * as S from './styles'

export function CoffeeCard() {
  return (
    <S.CardContainer>
      <S.Image src={coffeeImage} alt="" />
      <S.CategoriesContainer>
        <S.Category>Tradicional</S.Category>
        <S.Category>Gelado</S.Category>
      </S.CategoriesContainer>
      <S.Title>Expresso Tradicional</S.Title>
      <S.Description>
        O tradicional café feito com água quente e grãos moídos
      </S.Description>
      <S.CardBottomContainer>
        <S.Price>
          R$ <span>9,90</span>
        </S.Price>
        <S.ButtonsContainer>
          <S.QuantityButton>
            <Minus size={14} />
            1
            <Plus size={14} />
          </S.QuantityButton>
          <S.CartButton>
            <ShoppingCart size={22} weight="fill" />
          </S.CartButton>
        </S.ButtonsContainer>
      </S.CardBottomContainer>
    </S.CardContainer>
  )
}
