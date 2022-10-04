import styled from 'styled-components'

export const CardContainer = styled.li`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem;
`

export const Image = styled.img`
  margin-top: -1.25rem;
`

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Title = styled.span`
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const Description = styled.span`
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-top: 0.5rem;
`

export const CardBottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 31.2px;
    margin-left: 0.25rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const QuantityButton = styled.button`
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
  color: ${(props) => props.theme['base-title']};
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

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  transition: background 0.1s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
