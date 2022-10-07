import styled from 'styled-components'

export const ItemContainer = styled.li`
  display: flex;
  width: min-content(100%, 28rem);
  gap: 3.125rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const SelectedItem = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-subtitle']};
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const QuantityButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-title']};
  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    transition: color 0.1s;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const RemoveButton = styled.button`
  width: 5.625rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  transition: color 0.1s;
  cursor: pointer;
  transition: background 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const Price = styled.div`
  font-weight: 700;
  line-height: 20.8px;
  color: ${(props) => props.theme['base-text']};
`
