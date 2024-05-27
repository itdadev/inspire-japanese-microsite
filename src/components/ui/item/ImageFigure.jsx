import React from 'react';
import styled from "@emotion/styled";

const Container = styled.figure(({ ratio }) => ({
  position: 'relative',
  aspectRatio: ratio ? ratio : '16 / 9'
}));

const Image = styled.img(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  inset: 0,
}));

const ImageFigure = ({ratio, src, alt, local, children}) => {
  return (
    <Container ratio={ratio}>
      {children}

      <Image src={local ? src : `${process.env.REACT_APP_BASE_URL}${src}`} alt={alt} />
    </Container>
  );
};

export default ImageFigure;
