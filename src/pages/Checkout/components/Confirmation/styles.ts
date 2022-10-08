import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 0.75rem;

  span {
    font-size: 1rem;
  }
`

export const Total = styled(Subtotal)`
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  width: min(100%, 23rem);
  height: 2.875;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const ErrorMessage = styled.div`
  text-align: left;
  font-size: 0.75rem;
  height: 1rem;
  color: red;
  margin-top: -1rem;
`
