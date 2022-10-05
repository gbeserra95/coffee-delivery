import { Minus, Plus, Trash } from 'phosphor-react'
import coffeeImage from '../../../../assets/coffee.svg'
import * as S from './styles'

export function Item() {
  return (
    <S.ItemContainer>
      <S.SelectedItem>
        <img src={coffeeImage} alt="" />
        <S.ItemDescription>
          <span>Expresso Tradicional</span>
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
