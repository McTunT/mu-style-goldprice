import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const Light: DefaultTheme = {
  colors: {
    primary: '#f8f9fa',
    secondary: '#007bff',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
    background: '#fff',
    textColor: '#000',
    borderbox: 'none',
  },
}

export const Dark = {
  colors: {
    primary: '#03001c',
    secondary: '#3391ff',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
    background: '#010409',
    textColor: '#fff',
    borderbox: '#30363d',
  },
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`
