import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import layoutStyles from './headerStyles'
import { breakpoints } from '../styles/breakpoints'

// Component
const Header = () => {
  // Toggling the navigation menu for mobiles
  const [isNavVisible, setIsNavVisible] = useState(false)
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  // Fixing bug so that the nav menu doesn't automatically open for mobile
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoints[1]}px)`)
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  // Markup
  return (
    <header css={layoutStyles.header}>
      <nav css={layoutStyles.nav}>
        {/* Logo and Strapline */}
        <div css={layoutStyles.headerLogo}>
          <Link to='/'>
            <h4 css={layoutStyles.nameLogo}>Roland Barzegar</h4>
            <h3 css={layoutStyles.strapline}>
              Optimist,{' '}
              <span
                css={css`
                  background-color: var(--yellow);
                  font-weight: 700;
                `}
              >
                Life Coach
              </span>
              , Father and{' '}
              <span
                css={css`
                  background-color: var(--salmon);
                  font-weight: 700;
                `}
              >
                Content Creator
              </span>
            </h3>
          </Link>
        </div>

        {/* Navigation menu */}
        {(!isSmallScreen || isNavVisible) && (
          <div css={layoutStyles.navContainer}>
            <h4 css={layoutStyles.link}>
              <Link to={`/about`}>About me</Link>
            </h4>
            <h4 css={layoutStyles.link}>
              <Link to={`/blog`}>Blog</Link>
            </h4>
            <h4 css={layoutStyles.link}>
              <Link to={`/services`}>Services</Link>
            </h4>
            <h4 css={layoutStyles.link}>
              <Link to={`/contact`}>Contact</Link>
            </h4>
          </div>
        )}

        {/* Burger icon */}
        <div css={layoutStyles.burger}>
          <div css={layoutStyles.burgerStyles}>
            <div id='menu_button'>
              <input onClick={toggleNav} type='checkbox' id='menu_checkbox' />
              <label htmlFor='menu_checkbox' id='menu_label'>
                <div id='menu_text_bar'></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
