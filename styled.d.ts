// import original module declaration
import 'styled-components'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      quarternary: string
      placeholder: string
      onPrimary: string
      background: string
      textColor: string
      borderbox: string
      borderEye: string
      textLookBack: string
      textHLookBack: string
    }
  }
}
