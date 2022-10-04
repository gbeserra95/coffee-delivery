import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 90rem;
  height: 6.5rem;
  padding: 0 10rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  width: 9rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 18.2;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;
`
