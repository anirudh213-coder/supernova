import snLogo from './logos/sn_logo.png';
import snText from './logos/SN_text.png';
import bg_video from './Videos/bg_video.mp4';
import features_bg from './Videos/features_bg.mp4';

// Updated paths to include the extra underscore present in the actual filenames
import sn_product1 from './products/sn_product_1.png';
import sn_product2 from './products/sn_product_2.png';
import sn_product3 from './products/sn_product_3.png';

export {
  snLogo,
  snText,
  bg_video,
  features_bg,
  sn_product1,
  sn_product2,
  sn_product3,
};

export const LOGOS = {
  icon: snLogo,
  text: snText,
  background: bg_video,
  features: features_bg,
  product: sn_product1,
  product2: sn_product2,
  product3: sn_product3,
} as const;