import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import { paddingLeftIndent, container } from '../../styles/layoutComponents'
import Image from '../image'
import { mqMin, mqMax } from '../../styles/breakpoints'

// GRAPHQL

// STYLES

const heroStyles = {
  wrapper: css`
    background-color: var(--grey);
    padding-top: 2rem;
  `,
  gridContainer: css`
    ${container}
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'headline headline hero_image';
    ${mqMax[1]} {
      grid-template-columns: 1fr;
      grid-template-areas: 'hero_image' 'headline';
    }
  `,
  headlineContainer: css`
    grid-area: headline;
    ${mqMin[1]} {
      max-width: 75%;
      margin-top: -4rem;
    }
  `,
  headline: css`
    font-size: 4rem;
    font-weight: 400;
    ${paddingLeftIndent}
    ${mqMax[1]} {
      text-align: center;
      padding-left: 0;
    }
  `,
  spanRoland: css`
    font-weight: 300;
    font-style: italic;
  `,
  spanGYST: css`
    font-weight: 700;
    background-color: var(--yellow);
  `,
  hero_image: css`
    grid-area: hero_image;
  `,
  image: css`
    ${mqMax[1]} {
      max-height: 30rem;
      width: 100%;
    }
  `,
  quote: css`
    margin: 2rem 0 0 0;
    background-color: var(--salmon);
    display: inline-block;
    font-style: italic;
    padding: 0.15rem 0.4rem 0.15rem 0;
    margin-left: 2rem;
    line-height: 1.3rem;
    ${mqMax[1]} {
      padding-left: 0;
    }
  `
}

// COMPONENT

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            quote
          }
        }
      }
    `
  )
  return (
    <div css={heroStyles.wrapper}>
      <div css={heroStyles.gridContainer}>
        <div css={heroStyles.headlineContainer}>
          <h1 css={heroStyles.headline}>
            Hi, I'm <span css={heroStyles.spanRoland}>Roland</span>, and I'm here to help you <span css={heroStyles.spanGYST}>Get Your Sh*t Together</span>.
          </h1>
          <blockquote css={heroStyles.quote}>
            "{data.site.siteMetadata.quote}" <br />
            &nbsp;Naval Ravikant
          </blockquote>
        </div>
        <div css={heroStyles.hero_image}>
          <Image imgStyle={{ objectFit: 'cover', objectPosition: '0% 20%' }} css={heroStyles.image} src='hero_roland.jpg' alt='Roland Barzegar' />
        </div>
      </div>
    </div>
  )
}

export default Hero
