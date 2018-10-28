import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  justify-content: center;
  align-items: center;
  position:absolute;
  bottom:70px;
  width:100%;

  svg {
    max-width:350px;
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
