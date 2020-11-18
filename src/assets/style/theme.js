const Breakpoints = {
  xs: '640px',
  sm: '830px',
  md: '1100px',
  lg: '1500px'
}

const Colors = {
  c_main: '#3498db',
  c_main_dark: '#2980b9',
  c_secondary: '#34495e',
  c_secondary_dark: '#2c3e50',
  c_light: '#ffffff',
  c_gray: '#eeeeee'
}

const Spaces = {
  0: '0',
  4: '4px',
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px'
}

const Fonts = {
  default: 'Roboto, sans-serif',
  secondary: 'Raleway, sans-serif'
}

const FontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  24: '24px',
  32: '32px'
}

const FontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700
}


/** THEME */
export const Theme = {
  space: Spaces,
  breakpoint: Breakpoints,
  color: Colors,
  typography: {
    fontFamily: Fonts,
    fontSize: FontSize,
    fontWeight: FontWeight,
  }
}