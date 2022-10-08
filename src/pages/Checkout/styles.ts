import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 2.5rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const LeftFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(40rem, 100%);
  gap: 0.75rem;
`

export const RightFormContainer = styled(LeftFormContainer)`
  width: min(28rem, 100%);
`
