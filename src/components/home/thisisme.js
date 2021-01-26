import React from 'react'
import { css } from '@emotion/react'
import { paddingLeftIndent, container } from '../../styles/layoutComponents'
import { mqMin, mqMax } from '../../styles/breakpoints'

const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
  `,
  headlineContainer: css`
    ${container}
    padding-bottom: 0;
    transform: translateY(-198px);
  `,
  headline: css`
    font-weight: 300;
    font-size: 3.125rem;
    letter-spacing: 1px;
    ${paddingLeftIndent}
    span {
      font-weight: 700;
    }
  `,
  yellowstrip: css`
    width: 60vw;
    height: 10rem;
    background-color: var(--yellow);
    ${mqMax[1]} {
      width: 90vw;
    }
  `,
  servicesOffered: css`
    line-height: 2rem;
    width: 50%;
    margin: 0 auto 4rem;
  `,
  servicesDetail: css`
    width: 50%;
    margin: 0 auto 4rem;
    text-align: left;
    line-height: 3.5rem;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
  `,
  blackhighlight: css`
    background-color: var(--black);
    color: var(--white);
  `,
  greyhighlight: css`
    background-color: var(--grey);
  `
}

const ThisIsMe = () => {
  return (
    <div css={styles.wrapper}>
      {/* This is me graphic */}
      <div>
        <div>
          <div css={styles.yellowstrip}></div>
        </div>
        <div css={styles.headlineContainer}>
          <h2 css={styles.headline}>
            This is <span>me</span>
          </h2>
        </div>
      </div>

      {/* What I offer */}
      <div css={styles.servicesOffered}>
        I offer a <strong>variety of coaching services</strong> to help you move past the obstacles in your life. I will help you <strong>identify your personal values </strong>, strengths, and abilities in support of your personal and professional goals. Contact me to see how <strong>I can help you develop different perspectives</strong> and achieve the outcomes you’re striving for.
      </div>

      {/* List of services */}
      <h3 css={styles.servicesDetail}>
        <span>Life Coaching</span>&nbsp;
        <span css={styles.blackhighlight}>&nbsp;Mentoring&nbsp;</span>
        <br />
        <span css={styles.greyhighlight}>Performance enhancement&nbsp;</span>
        <br />
        <span css={styles.blackhighlight}>&nbsp;Personal vision&nbsp;</span>&nbsp;
        <span>Career goals</span>
        <br />
        <span css={styles.greyhighlight}>Lifestyle blog&nbsp;</span>&nbsp;
        <span>Mindfulness</span>
        <br />
        <span>Goal setting</span>
      </h3>
    </div>
  )
}

export default ThisIsMe
