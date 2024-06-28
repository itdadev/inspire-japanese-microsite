import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@/lib/react-responsive/mediaQuery';

const Container = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '3rem',
  minHeight: '50rem',

  [mq('tablet')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [mq('desktop')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const ListContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ListContainer;
