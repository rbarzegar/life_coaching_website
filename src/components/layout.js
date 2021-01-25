import React from 'react'
import Header from './header'
import Footer from './footer'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { globalstyles, colors } from '../styles/globalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          ${globalstyles}
          ${colors}
        `}
      />
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <Header />
        <div
          css={css`
            flex-grow: 1;
          `}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
