import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  img {
    align-self: center;
    padding-inline-start: 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 35% 65%;
  }
`

export const Navbar = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
  padding: 3rem;
  background-color: var(--primary500);

  ul {
    display: flex;
    gap: 1.5rem;
    list-style-type: none;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    inset: 15% 5% 50% 30%;
    background-color: var(--secondary500);
    color: var(--primary10);

    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`
