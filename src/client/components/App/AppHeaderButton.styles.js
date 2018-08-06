
import styled from 'styled-components';
import common from '../../styles/common';

// styles
const css = {
  palette: {
    bgColor: common.palette.primaryDark,
    bgColorActive: common.palette.primaryDarker,
    textColor: common.palette.white
  }
};
export default css;

// components
export const HeaderButton = styled.button`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
  background-color: ${css.palette.bgColor};
  color: ${css.palette.textColor};

  &:active, &.active {
    background-color: ${css.palette.bgColorActive}
  }
`;
