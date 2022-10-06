import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { Categories } from '../../utils/data'
import * as S from './styles'

interface CoffeeCardProps {
  image: string
  name: string
  description: string
  categories: Categories[]
  price: Number
}

export function CoffeeCard({
  image,
  categories,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <S.CardContainer>
      <S.Image src={image} alt="" />
      <S.CategoriesContainer>
        {categories.map((category) => (
          <S.Category key={category}>{category}</S.Category>
        ))}
      </S.CategoriesContainer>
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
      <S.CardBottomContainer>
        <S.Price>
          R$ <span>{String(price.toFixed(2)).replace('.', ',')}</span>
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
