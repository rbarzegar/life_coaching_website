import { css } from '@emotion/react'
import { mqMin, mqMax } from '../styles/breakpoints'

export const container = css`
  padding: 1rem 3rem;
  ${mqMax[1]} {
    padding: 1rem 0.75rem;
  }
`
