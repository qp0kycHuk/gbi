const elementsSizes = {
  xs: '24px',
  sm: '32px',
  base: '42px',
  lg: '52px',
  xl: '64px',
}

const headingStyles = {
  fontWeight: '500',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: 420 + 29.98 + 'px',
      sm: 580 + 29.98 + 'px',
      md: 740 + 29.98 + 'px',
      lg: 1170 + 29.98 + 'px',
      xl: 1366 + 'px',
    },
    container: {
      xs: 420 + 'px',
      sm: 580 + 'px',
      md: 740 + 'px',
      lg: 1170 + 'px',
      xl: 1240 + 'px',
    },
    colors: {
      primary: withOpacity('--primary-rgb'),
      sec: withOpacity('--sec-rgb'),
      blue: withOpacity('--blue-rgb'),
      red: withOpacity('--red-rgb'),
      green: withOpacity('--green-rgb'),
      yellow: withOpacity('--yellow-rgb'),
      white: withOpacity('--white-rgb'),
      black: withOpacity('--black-rgb'),
      grey: withOpacity('--grey-rgb'),
      l1: withOpacity('--bg1-rgb'),
      l2: withOpacity('--bg2-rgb'),
      l3: withOpacity('--bg3-rgb'),
      default: withOpacity('--default-rgb'),
    },
    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },
    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      inputSize: elementsSizes,
      btnSize: elementsSizes,
      spacing: {
        [15]: 15 * 4 / 16 + 'rem',
        [18]: 18 * 4 / 16 + 'rem',
        [65]: '16.25rem'
      },
      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.1xl': ['1.5625rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
      },
      lineHeight: {
        xs: '1.1'
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
    require('@qpokychuk/tailwind-ratio-plugin'),
    require('@qpokychuk/tailwind-input-plugin')({
      border: "1px solid theme('colors.default / 40%')",
    }),
    require('@qpokychuk/tailwind-checkbox-plugin')({
      border: "1px solid theme('colors.default / 40%')",
    }),
  ],
}



function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return 'rgba(var(' + variableName + '), ' + opacityValue + ')'
    }

    return 'rgba(var(' + variableName + '), 1)'
  }
}
