
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChild
} from '@fortawesome/free-solid-svg-icons';

const initFontAwesomeLibrary = () => {
  library.add(
    faBars,
    faChild
  );
};

export default initFontAwesomeLibrary;
