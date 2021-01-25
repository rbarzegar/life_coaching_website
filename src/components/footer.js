import React from 'react'
import { css } from '@emotion/react'
import { container } from '../styles/layoutComponents'

const footerStyles = {
  footer: css`
    background-color: var(--offblack);
    color: var(--white);
  `,
  copyright: css`
    margin-bottom: 0;
  `
}

// Component
const Footer = () => {
  const date = new Date().getFullYear()

  // Markup
  return (
    <footer css={footerStyles.footer}>
      <div css={container}>
        <p css={footerStyles.copyright}>&copy; Roland Barzegar {`${date}`}</p>
      </div>
    </footer>
  )
}

export default Footer
