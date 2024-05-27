import { useMediaQuery } from "react-responsive";

export const IsDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? children : null;
};

export const IsTablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return isTablet ? children : null;
};

export const IsMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? children : null;
};

export const IsDefault = ({ children }) => {
  const isDefault = useMediaQuery({ maxWidth: 1023 });

  return isDefault ? children : null;
};

const bp = {
  mobile: 360,
  tablet: 768,
  desktop: 1240,
};

export const mq = (n) => `@media (min-width: ${bp[n]}px)`;
