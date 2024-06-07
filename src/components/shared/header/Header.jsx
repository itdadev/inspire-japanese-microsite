import React from 'react';
import {image} from "@/theme";
import styled from "@emotion/styled";
import {mq} from "@/lib/react-responsive/mediaQuery";

const Container = styled.header(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  background: 'white',
  borderBottom: `2px solid ${theme.color.point01}`
}));

const Logo = styled.img(() => ({
  height: '3.6rem',

  [mq("desktop")] : {
    height: '4.8rem',
  }
}))

const Header = () => {
  return (
    <Container>
      <a href="https://inspirekorea.com/ja" target="_blank"  rel="noreferrer">
        <Logo src={image.logo.default} alt="Inspire Entertainment Resort" />
      </a>
    </Container>
  );
};

export default Header;
