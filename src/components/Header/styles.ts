import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 90rem;
  height: 6.5rem;
  padding: 0 10rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 0 4rem;
  }

  @media (max-width: 1260px) {
    padding: 0 2rem;
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`

export const ActionsContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  width: 9rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 18.2px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.button`
  position: relative;
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

export const CartCounter = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -0.375rem;
  right: -0.375rem;
  z-index: 1;
  border: none;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
`
