import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 52.5% 1fr;
  gap: 3.5rem;
  width: 100%;
  padding: 5.875rem 0;
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4.125rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`

export const ItemContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
  line-height: 20.8px;
`

const COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IColors {
  bg: keyof typeof COLORS
}

export const Icon = styled.div<IColors>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[COLORS[props.bg]]};
`

export const CoffeeListContainer = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 41.6px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.375rem;
  list-style: none;
`
