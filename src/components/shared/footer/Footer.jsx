import React, { memo } from 'react';
import styled from '@emotion/styled';

import { CommonContainer } from '@/components/ui/container';
import { mq } from '@/lib/react-responsive/mediaQuery';
import { useGetFooterInformation } from '@/hooks/Requests';
import { FooterBottom, FooterTop } from '@/components/shared/footer/index';

const FooterContainer = styled.footer(({ theme }) => ({
  position: 'relative',
  height: '100%',
  marginTop: '6rem',
  backgroundColor: '#E4E2DF',
  backgroundImage: `url(${theme.image.footerBackgroundMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '115% 100%',
  fontSize: '1.4rem',
  lineHeight: '1.5em',
  zIndex: 100,

  [mq('tablet')]: {
    backgroundSize: '100% auto',
  },

  [mq('desktop')]: {
    backgroundImage: `url(${theme.image.footerBackground})`,
    padding: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.color.point01,
  },
}));

const Footer = () => {
  const [
    { data: footerAddress },
    { data: footerMenu },
    { data: footerContact },
    { data: footerSns },
  ] = useGetFooterInformation();

  return (
    <FooterContainer>
      <CommonContainer>
        <FooterTop
          footerAddress={footerAddress}
          footerMenu={footerMenu}
          footerContact={footerContact}
        />
      </CommonContainer>

      <FooterBottom footerAddress footerSns={footerSns} />
    </FooterContainer>
  );
};

export default memo(Footer);
