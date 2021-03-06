import styled from 'styled-components'

export const Contact = styled.div`
  .contact-content {
    position: fixed;
    inset: 0;
    background-color: hsla(240, 14%, 11%, 0.6);
    z-index: 999;
  }

  .modal-close {
    display: none;
  }

  .form-content {
    position: absolute;
    inset: 15% 30%;
    background-color: var(--secondary500);
  }

  .form {
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--primary10);
  }

  .form input,
  textarea {
    width: 50%;
    padding: 0.7rem;
  }

  .form label {
    font-size: 1rem;
  }

  .contact-close {
    position: absolute;
    right: 1rem;
    text-decoration: none;
    font-size: 3rem;
    color: var(--primary10);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .form-content {
      inset: 15% 20%;
    }
  }

  @media (max-width: 768px) {
    .form-content {
      inset: 10%;
    }

    .form input,
    textarea {
      width: 85%;
    }
  }
`
