import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
nav {
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
.navbar-brand, .nav-link {
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
`