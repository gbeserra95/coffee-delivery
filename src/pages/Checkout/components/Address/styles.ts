import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.125rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.8px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 18.2px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormFieldContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

interface BaseInputProps {
  isError?: boolean
}

export const BaseInput = styled.input<BaseInputProps>`
  display: flex;
  align-items: center;
  height: 2.625rem;
  border: ${(props) =>
    props.isError
      ? '2px solid red'
      : `1px solid ${props.theme['base-button']}`};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CEP = styled(BaseInput)`
  width: min(100%, 12.5rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Street = styled(BaseInput)`
  width: 100%;
`

export const Number = styled(BaseInput)`
  width: min(100%, 12.5rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Complement = styled(BaseInput)`
  width: min(100%, 21.75rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Suburb = styled(BaseInput)`
  width: min(100%, 12.5rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const City = styled(BaseInput)`
  width: min(100%, 17.25rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const UF = styled(BaseInput)`
  width: min(100%, 3.75rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`
