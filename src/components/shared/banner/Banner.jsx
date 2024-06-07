import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@/lib/react-responsive/mediaQuery';

const Container = styled.div(() => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',

  [mq('tablet')]: {
    aspectRatio: '3 / 2',
    height: '100%',
  },

  [mq('desktop')]: {
    aspectRatio: '3 / 1',
    height: '100%',
  },

  video: {
    width: '100%',
    position: 'absolute',
    inset: 0,
    height: '100%',
    objectFit: 'cover',
  },
}));
const Banner = () => {
  return (
    <Container>
      <video preload="auto" autoPlay loop="loop" aria-hidden="true" playsInline muted width="100%">
        <source
          src="https://inspireweb-assets.s3.ap-northeast-2.amazonaws.com/Videos/INSPIRE_CM_Short.mp4"
          type="video/mp4"
        />
      </video>
    </Container>
  );
};

export default Banner;
