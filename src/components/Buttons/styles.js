import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  background-color: ${props =>
    props.test === 'primary' || props.test === 'tertiary'
      ? 'var(--secondary900)'
      : 'var(--primary500)'};

  padding: ${props => (props.test === 'tertiary' ? '1.3rem 0' : '1.3rem 4rem')};

  color: ${props =>
    props.test === 'tertiary' ? 'var(--primary500)' : 'var(--primary10)'};

  span {
    border-bottom: ${props =>
      props.test === 'tertiary' ? '2px solid var(--primary500)' : ''};
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

export const ButtonSubmit = styled(Button)`
  width: 50%;

  @media (max-width: 768px) {
    width: 85%;
  }
`

export const ButtonMoreInfo = styled(Button)``
