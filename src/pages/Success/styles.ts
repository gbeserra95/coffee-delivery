import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 5rem;
  margin-bottom: 2.5rem;
  gap: 0.25rem;

  @media (max-width: 1260px) {
    padding-top: 4rem;
  }

  @media (max-width: 900px) {
    padding-top: 2rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    line-height: 130%;
    color: #${(props) => props.theme['base-subtitle']};
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 32.875rem);
  height: 16.875rem;
  padding: 2.5rem;
  gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    linear-gradient(45deg, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1));
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

export const Text = styled.div`
  color: ${(props) => props.theme['base-text']};

  span {
    font-weight: 700;
  }
`
