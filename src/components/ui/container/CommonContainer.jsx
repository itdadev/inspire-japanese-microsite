import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  maxWidth: '124rem',
  margin: '0 auto',
  padding: '0 1.6rem',
  width: '100%',
}))

const CommonContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default CommonContainer;
