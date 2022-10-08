import { useFormContext } from 'react-hook-form'

import { MapPinLine } from 'phosphor-react'
import * as S from './styles'

export function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

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
          <S.CEP
            type="text"
            placeholder="CEP"
            {...register('zipCode')}
            isError={!!errors.zipCode}
          />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Street
            type="text"
            placeholder="Rua"
            {...register('street')}
            isError={!!errors.street}
          />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Number
            type="text"
            placeholder="Número"
            {...register('number')}
            isError={!!errors.number}
          />
          <S.Complement
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            isError={!!errors.complement}
          />
        </S.FormFieldContainer>
        <S.FormFieldContainer>
          <S.Suburb
            type="text"
            placeholder="Bairro"
            {...register('suburb')}
            isError={!!errors.suburb}
          />
          <S.City
            type="text"
            placeholder="Cidade"
            {...register('city')}
            isError={!!errors.city}
            disabled
          />
          <S.UF
            type="text"
            placeholder="UF"
            {...register('state')}
            isError={!!errors.state}
            disabled
          />
        </S.FormFieldContainer>
      </S.InputsContainer>
    </S.Container>
  )
}
