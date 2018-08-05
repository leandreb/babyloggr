
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChild,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const initFontAwesomeLibrary = () => {
  library.add(
    faBars,
    faChild,
    faTimes
  );
};

export default initFontAwesomeLibrary;
