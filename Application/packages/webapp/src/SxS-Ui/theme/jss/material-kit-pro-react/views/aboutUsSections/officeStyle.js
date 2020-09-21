import {
  title,
  description,
  mrAuto,
  mlAuto,
} from '@sxs/theme/jss/material-kit-pro-react.js';
import imagesStyles from '@sxs/theme/jss/material-kit-pro-react/imagesStyles.js';

const { imgRaised } = imagesStyles;
const rounded = imagesStyles.imgRounded;
const { imgFluid } = imagesStyles;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: 'center!important',
  },
  office: {
    '& img': {
      margin: '20px 0px',
    },
  },
  imgRaised,
  rounded,
  imgFluid,
};

export default servicesStyle;
