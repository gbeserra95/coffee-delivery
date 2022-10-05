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

export const Button = styled.button`
  width: 4.5rem;
  height: 2.375rem;
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
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme.purple};
    transition: color 0.1s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const RemoveButton = styled(Button)`
  width: 5.75rem;
  font-size: 0.75rem;
  transition: color 0.1s;
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const Price = styled.div`
  font-weight: 700;
  line-height: 20.8px;
  color: ${(props) => props.theme['base-text']};
`
