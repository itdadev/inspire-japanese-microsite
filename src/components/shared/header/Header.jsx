import React from 'react';
import {image} from "@/theme";
import styled from "@emotion/styled";

const Container = styled.header(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  background: 'white',
  borderBottom: `2px solid ${theme.color.point01}`
}));

const Header = () => {
  return (
    <Container>
      <a href="https://inspirekorea.com/ja" target="_blank"  rel="noreferrer">
        <img src={image.logo.default} alt="Inspire Entertainment Resort" height={54}/>
      </a>
    </Container>
  );
};

export default Header;
