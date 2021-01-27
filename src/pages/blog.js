import React from 'react'
import Layout from '../components/layout'
import { container } from '../styles/layoutComponents'
import { css } from '@emotion/react'
import { mqMax } from '../styles/breakpoints'

const styles = {
  title: css`
    font-size: 3.125rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: 1.5px;
    margin: 5.125rem 0;
  `,
  bold: css`
    font-weight: 700;
  `,
  cardGrid: css`
    max-width: 1200px;
    margin: 0 auto 5.125rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
  `,
  card: css`
    background-color: var(--yellow);
    padding: 1rem;
    height: 300px;
    width: 300px;
  `
}

// markup
const Blog = () => {
  return (
    <Layout>
      <div css={container}>
        <h1 css={styles.title}>
          Recent <span css={styles.bold}>Blog</span> Posts
        </h1>
        <div css={styles.cardGrid}>
          <div css={styles.card}>1</div>
          <div css={styles.card}>2</div>
          <div css={styles.card}>3</div>
          <div css={styles.card}>4</div>
          <div css={styles.card}>5</div>
          <div css={styles.card}>6</div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
