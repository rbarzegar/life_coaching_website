import Typography from 'typography'
// import fairyGatesTheme from 'typography-theme-fairy-gates'
// fairyGatesTheme.baseFontSize = '16px'
// fairyGatesTheme.baseLineHeight = '1.6'
// fairyGatesTheme.scaleRatio = '2.0581'
// fairyGatesTheme.headerWeight = '700'
// fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//   a: {
//     backgroundImage: 'none',
//     textShadow: 'none'
//   }
// })

// const typography = new Typography(fairyGatesTheme)

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['100', '300', '300i', '400', '700']
    },
    {
      name: 'Playfair Display',
      styles: ['400', '700']
    }
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 4.209,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Playfair Display', 'serif']
})

export const { scale, rhythm, options } = typography
export default typography
