import React, { memo, useEffect, useState } from 'react';
import { mq } from '@/lib/react-responsive/mediaQuery';
import styled from '@emotion/styled';

const DetailPageHeroContainer = styled.div(({ small, url }) => ({
  position: 'relative',
  width: '100%',
  height: '50vh',
  maxHeight: '57.4rem',

  backgroundImage: `url("${process.env.REACT_APP_BASE_URL.replaceAll('japan', '')}${url}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',

  [mq('desktop')]: {
    aspectRatio: small ? '6 / 1' : '3 / 1',
    height: '100%',
  },
}));

const NormalOverlayContainer = styled.div(() => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.15)',
  zIndex: 1,
  transition: 'all 0.3s',
}));

const DetailPageHero = ({ data, small = false }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (open) {
        handleTooltipClose();
      }
    }, 3000);
  }, [open]);

  return (
    data?.field_hero !== '' && (
      <DetailPageHeroContainer
        small={small || data?.field_small_banner_size === 'True'}
        url={data?.field_hero}
      >
        <NormalOverlayContainer />
      </DetailPageHeroContainer>
    )
  );
};

export default memo(DetailPageHero);
