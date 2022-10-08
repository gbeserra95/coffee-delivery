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
    color: ${(props) => props.theme.purple};
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 1rem;
  flex-wrap: wrap;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

interface PaymentButtonProps {
  selected?: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  width: 11.125rem;
  height: 3.1875rem;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.purple}` : 'none'};
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
