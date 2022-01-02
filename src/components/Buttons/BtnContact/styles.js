import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  background-color: var(--secondary900);
  border: none;

  padding: ${props => (props.tertiary ? '1.3rem 0' : '1.3rem 4rem')};

  color: ${props =>
    props.tertiary ? 'var(--primary500)' : 'var(--primary10)'};

  span {
    border-bottom: ${props =>
      props.tertiary ? '2px solid var(--primary500)' : ''};
    padding-bottom: 6px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    background-color: ${props =>
      props.mobile ? 'var(--primary500)' : 'var(--secondary900)'};
  }
`

export const ButtonSecondary = styled(Button)`
  background-color: var(--primary500);
`

export const ButtonSubmit = styled(Button)`
  padding: 1.3rem 4rem;
  background-color: var(--primary500);
`
