import { createContext, ReactNode, useEffect, useState } from 'react'

type PaymentType = 'creditCard' | 'debitCard' | 'cash'

interface Address {
  zipCode: string
  street: string
  number: string
  complement?: string
  suburb: string
  city: 'Blumenau'
  state: 'SC'
}

interface DeliveryContextType {
  address: Address
  paymentType: PaymentType
  handleAddress: (address: Address) => void
  handlePayment: (payment: PaymentType) => void
}

interface DeliveryContextProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextType)

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const initialAddress: Address = {
    zipCode: '',
    street: '',
    number: '',
    suburb: '',
    city: 'Blumenau',
    state: 'SC',
  }

  const [address, setAddress] = useState<Address>(() => {
    const storedAddressJSON = localStorage.getItem(
      `@ignite-coffee-delivery:address-1.0.0`,
    )

    if (storedAddressJSON) return JSON.parse(storedAddressJSON)

    return initialAddress
  })

  const [paymentType, setPaymentType] = useState<PaymentType>(() => {
    const storedPaymentTypeJSON = localStorage.getItem(
      `@ignite-coffee-delivery:payment-type-1.0.0`,
    )

    if (storedPaymentTypeJSON) return JSON.parse(storedPaymentTypeJSON)

    return null
  })

  useEffect(() => {
    const addressJSON = JSON.stringify(address)
    localStorage.setItem(`@ignite-coffee-delivery:address-1.0.0`, addressJSON)
  }, [address])

  useEffect(() => {
    const paymentTypeJSON = JSON.stringify(paymentType)
    localStorage.setItem(
      `@ignite-coffee-delivery:payment-type-1.0.0`,
      paymentTypeJSON,
    )
  }, [paymentType])

  function handleAddress(address: Address) {
    setAddress(address)
  }

  function handlePayment(paymentType: PaymentType) {
    setPaymentType(paymentType)
  }

  return (
    <DeliveryContext.Provider
      value={{
        address,
        paymentType,
        handleAddress,
        handlePayment,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
