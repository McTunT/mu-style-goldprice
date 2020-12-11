// import original module declaration
import 'styled-components'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: srting
      quarternary: string
      placeholder: string
      onPrimary: string
      background: string
      textColor: string
      borderbox: string
    }
  }
}
