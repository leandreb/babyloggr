
import { css } from 'styled-components';

// design colors
// const colors = {
//   white: '#fff',
//   black: '#000',
//   primary: 'rgba(242, 149, 121, 1)',
//   primaryDark: 'rgba(219, 109, 99, 1)',
//   secondary: 'rgba(242, 149, 121, 1)'
// };

// common design vars
const commonCss = {
  palette: {
    white: '#fff',
    black: '#000',
    primary: '#f29478',
    primaryDark: '#db6d63',
    primaryDarker: '#a63026',
    secondary: '#f29478'
  },
  font: {
    sans: 'Arial'
  },
  size: {
    header: {
      small: '3.2em',
      medium: '4em'
    }
  }
};
export default commonCss;

// mixins
export function textShadowMixin(color = 'rgba(0, 0, 0, 0.25)') {
  return css`
    text-shadow: 1px 2px 0 ${color};
  `;
}
