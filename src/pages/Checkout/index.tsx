import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Address } from './components/Address'
import { Confirmation } from './components/Confirmation'
import { Payment } from './components/Payment'

import * as S from './styles'
import { useContext } from 'react'
import { DeliveryContext } from '../../contexts/DeliveryContext'

const addressFormValidationSchema = zod.object({
  zipCode: zod.string().min(8),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  suburb: zod.string().min(1),
  city: zod.literal('Blumenau'),
  state: zod.literal('SC'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { address } = useContext(DeliveryContext)

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: address.zipCode,
      street: address.street,
      number: address.number,
      complement: address.complement,
      suburb: address.suburb,
      city: address.city,
      state: address.state,
    },
  })

  return (
    <main>
      <FormProvider {...addressForm}>
        <S.CheckoutContainer>
          <S.LeftFormContainer>
            <h2>Complete seu pedido</h2>
            <Address />
            <Payment />
          </S.LeftFormContainer>
          <S.RightFormContainer>
            <h2>Cafés selecionados</h2>
            <Confirmation />
          </S.RightFormContainer>
        </S.CheckoutContainer>
      </FormProvider>
    </main>
  )
}
