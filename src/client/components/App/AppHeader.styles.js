
import styled from 'styled-components';
import common, { textShadowMixin } from '../../styles/common';

// styles
const css = {
  size: common.size.header,
  palette: {
    bgColor: common.palette.primary,
    buttonColor: common.palette.primaryDark,
    buttonActiveColor: common.palette.primaryDarker,
    textColor: common.palette.white,
    textShadow: common.palette.primaryDarker
  },
  font: {
    title: common.font.sans
  }
};
export default css;

// components
export const ContainerRow = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

export const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${css.size.small};
  background-color: ${css.palette.bgColor};

  nav {
    width: ${css.size.small};
    height: ${css.size.small};
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  color: ${css.palette.textColor};
  font-size: 1.4em;
  ${textShadowMixin(css.palette.textShadow)}
  letter-spacing: -.05em;
`;
