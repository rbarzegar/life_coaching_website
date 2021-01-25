import { css } from '@emotion/react'
import { container } from '../styles/layoutComponents'
import { rhythm } from '../utils/typography'
import { mqMax } from '../styles/breakpoints'

// Styles
const headerStyles = {
  header: css`
    position: sticky;
    top: 0;
    width: 100vw;
    z-index: 1000;
  `,
  nav: css`
    background-color: var(--grey);
    min-height: 100px;
    display: grid;
    grid-template-areas: 'logo nav';
    align-items: center;
    justify-content: space-between;
    ${container}
    ${mqMax[1]} {
      grid-template-areas:
        'logo   burger'
        'nav    nav';
    }
  `,
  headerLogo: css`
    color: var(--black);
    a {
      text-decoration: none;
      color: inherit;
    }
  `,
  nameLogo: css`
    margin-bottom: ${rhythm(0.25)};
  `,
  strapline: css`
    font-size: 1.375rem;
    font-weight: 100;
    margin-bottom: ${rhythm(0.25)};
    max-width: 75%;
    ${mqMax[1]} {
      padding-bottom: ${rhythm(0.25)};
    }
  `,

  navContainer: css`
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-gap: 1.5rem;
    a {
      padding-top: ${rhythm(0.25)};
      border-top: 2px solid var(--black);
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;
      ${mqMax[1]} {
        display: block;
        border-top: none;
        padding: 0.5rem;
        color: var(--grey);
        font-size: 1.1rem;
      }
    }
    ${mqMax[1]} {
      grid-template-rows: repeat(4, auto);
      grid-template-columns: none;
      grid-row-gap: 1.2rem;
      background: rgba(40, 44, 47, 0.95);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `,
  link: css`
    margin-bottom: ${rhythm(0.25)};
    font-weight: 300;
    ${mqMax[1]} {
      margin-bottom: 0;
    }
  `,
  burger: css`
    display: none;
    ${mqMax[1]} {
      display: block;
    }
  `,
  navAnimations: css`
    .NavAnimation-enter {
      opacity: 0;
      transform: scale(0.5);
    }
    .NavAnimation-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 350ms, transform 350ms;
    }
    .NavAnimation-exit {
      opacity: 1;
    }
    .NavAnimation-exit-active {
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 350ms, transform 350ms;
    }
  `,
  // TAKEN FROM https://codepen.io/himalayasingh/pen/GzZWyX
  burgerStyles: css`
    #menu_button {
      width: 36px;
      overflow: hidden;
    }

    #menu_checkbox {
      display: none;
    }

    #menu_label {
      position: relative;
      display: block;
      height: 29px;
      cursor: pointer;
    }

    #menu_label:before,
    #menu_label:after,
    #menu_text_bar {
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--black);
    }

    #menu_label:before,
    #menu_label:after {
      content: '';
      transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
    }

    #menu_label:before {
      top: 0;
    }

    #menu_label:after {
      top: 12px;
    }

    #menu_text_bar {
      top: 24px;
    }

    #menu_text_bar:before {
      content: 'MENU';
      position: absolute;
      top: 5px;
      right: 0;
      left: 0;
      color: var(--black);
      font-size: 12px;
      font-weight: bold;
      font-family: 'Roboto', Helvetica, sans-serif;
      text-align: center;
    }

    #menu_checkbox:checked + #menu_label:before {
      left: -39px;
    }

    #menu_checkbox:checked + #menu_label:after {
      left: 39px;
    }

    #menu_checkbox:checked + #menu_label #menu_text_bar:before {
      animation: moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards;
    }

    @keyframes moveUpThenDown {
      0% {
        top: 0;
      }
      50% {
        top: -27px;
      }
      100% {
        top: -14px;
      }
    }

    @keyframes shakeWhileMovingUp {
      0% {
        transform: rotateZ(0);
      }
      25% {
        transform: rotateZ(-10deg);
      }
      50% {
        transform: rotateZ(0deg);
      }
      75% {
        transform: rotateZ(10deg);
      }
      100% {
        transform: rotateZ(0);
      }
    }

    @keyframes shakeWhileMovingDown {
      0% {
        transform: rotateZ(0);
      }
      80% {
        transform: rotateZ(3deg);
      }
      90% {
        transform: rotateZ(-3deg);
      }
      100% {
        transform: rotateZ(0);
      }
    }
  `
}

export default headerStyles
