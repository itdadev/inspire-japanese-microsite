// NOTE: 공통 이미지
import { mq } from '@/lib/react-responsive/mediaQuery';

export const image = {
  logo: require('@/assets/images/inspire-logo.svg'),
  bannerImage: require('@/assets/images/banner-image.png'),
  footerBackground: require('@/assets/images/footer-background.png'),
  footerBackgroundMobile: require('@/assets/images/footer-background-mobile.png'),

  //   icons
  logoWhite: require('@/assets/icons/logo-white-full.svg'),
  shareIcon: require('@/assets/icons/share-icon.svg'),
  articleLogo: require('@/assets/icons/article-logo.svg'),
  refreshIcon: require('@/assets/icons/refresh.svg'),
  searchIcon: require('@/assets/icons/search-icon.svg'),
};

// NOTE: 공통 컬러
export const color = {
  primary: '#CB88CB',
  point01: '#6F5B7F',
  point02: '#7C8FAC',
  grey01: '#a6a6a6',
};

export const AppTheme = {
  image,
  color,
  palette: {
    primary: {
      main: '#68507C',
    },
  },
  typography: {
    htmlFontSize: 10,

    [mq('mobile')]: {
      fontSize: 14,
    },

    [mq('desktop')]: {
      fontSize: 16,
    },
  },
  fontWeight: {
    // NOTE: 공통 폰트 굵기
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  shadow: {},
  radius: {},
};

export default AppTheme;
