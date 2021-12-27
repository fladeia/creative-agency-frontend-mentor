import styled from 'styled-components'

export const Button = styled.button`
  padding: 1.3rem 4rem;
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  background-color: var(--secondary500);
  border: none;

  color: ${props =>
    props.tertiary ? 'var(--primary500)' : 'var(--primary10)'};

  span {
    border-bottom: ${props =>
      props.tertiary ? '2px solid var(--primary500)' : ''};
  }

  @media (max-width: 768px) {
    background-color: ${props =>
      props.mobile ? 'var(--primary500)' : 'var(--secondary500)'};
  }
`

export const ButtonSecondary = styled(Button)`
  background-color: var(--primary500);
`
