// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      text: string,
      textDarker: string,
      backgraund: string,
    }
  }
}