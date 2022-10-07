import { Minus, Plus, Trash } from 'phosphor-react'
import * as S from './styles'

interface ItemProps {
  cartId: string
  name: string
  image: string
  price: number
}

export function Item({ cartId, name, image, price }: ItemProps) {
  return (
    <S.ItemContainer>
      <S.SelectedItem>
        <img src={image} alt="" />
        <S.ItemDescription>
          <span>{name}</span>
          <div>
            <S.Button>
              <Minus size={14} />
              1
              <Plus size={14} />
            </S.Button>
            <S.RemoveButton>
              <Trash size={14} />
              Remover
            </S.RemoveButton>
          </div>
        </S.ItemDescription>
      </S.SelectedItem>
      <S.Price>R$ 9,90</S.Price>
    </S.ItemContainer>
  )
}
