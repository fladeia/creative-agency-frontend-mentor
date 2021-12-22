import styled from 'styled-components'

export const Button = styled.button`
  padding: 1.3rem 3rem;
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${props =>
    props.secondary ? 'var(--primary500)' : 'var(--secondary900)'};
  color: var(--primary10);
  border: none;
`
export const ButtonTertiary = styled(Button)`
  color: var(--primary500);

  span {
    border-bottom: 2px solid var(--primary500);
  }
`
