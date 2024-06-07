import React from 'react';
import styled from '@emotion/styled';

const Container = styled.figure(({ ratio, maxHeight }) => ({
  position: 'relative',
  aspectRatio: ratio ? ratio : '16 / 9',
  maxHeight: maxHeight ? maxHeight : '',
  width: '100%',
}));

const Image = styled.img(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  inset: 0,
}));

const ImageFigure = ({ ratio, src, alt, local, children, maxHeight }) => {
  return (
    <Container ratio={ratio} maxHeight={maxHeight}>
      {children}

      <Image
        src={local ? src : `${process.env.REACT_APP_BASE_URL}${src.replace('/japan', '')}`}
        alt={alt}
      />
    </Container>
  );
};

export default ImageFigure;
