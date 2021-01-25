import { css } from '@emotion/react'

export const globalStyles = css`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

export const colors = css`
  :root {
    --white: #ffffff;
    --grey: #f4f4f4;
    --yellow: #edf130;
    --salmon: #f7c5b9;
    --black: #000;
    --offblack: #100f0f;
  }
`
