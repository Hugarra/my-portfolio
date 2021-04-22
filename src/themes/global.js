import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
a {
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
nav {
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25), 0 3px 10px 5px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.25s linear;
}
.card {
  background: ${({ theme }) => theme.card};
  border-color: ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25), 0 3px 10px 5px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.25s linear;
}
.navbar-brand {
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
.form-control {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.cardBorder};
  transition: all 0.25s linear;
}
`