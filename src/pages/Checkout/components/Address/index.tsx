import { MapPinLine } from 'phosphor-react'
import * as S from './styles'

export function Address() {
  return (
    <S.Container>
      <S.Title>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber o seu pedido</span>
        </div>
      </S.Title>
      <S.InputsContainer>
        <S.FormFieldContainer>
          <S.CEP type="text" placeholder="CEP" />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Street type="text" placeholder="Rua" />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Number type="text" placeholder="Número" />
          <S.Complement type="text" placeholder="Complemento" />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Suburb type="text" placeholder="Bairro" />
          <S.City type="text" placeholder="Cidade" />
          <S.UF type="text" placeholder="UF" />
        </S.FormFieldContainer>
      </S.InputsContainer>
    </S.Container>
  )
}
