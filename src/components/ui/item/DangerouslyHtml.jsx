import React, { memo } from 'react';
import { switchSlashToEmptySpace } from '@/utils/Functions';
import styled from '@emotion/styled';
import { mq } from '@/lib/react-responsive/mediaQuery';

const Container = styled.div(({ custom }) => ({
  '& img': {
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
  },

  [mq('tablet')]: {
    '& img': {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
    },
  },

  [mq('desktop')]: {
    '& img': {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
    },
  },

  li: {
    marginBottom: '1rem',
  },

  '& ul': {
    paddingLeft: '3rem',

    '& li': {
      listStyle: 'initial',
    },
  },

  '& ol': {
    paddingLeft: '3rem',

    li: {
      listStyle: 'decimal',
    },
  },

  ...custom,
}));

const DangerouslyHtml = ({ value, className, custom }) => {
  return typeof value === 'string' ? (
    <Container
      className={className}
      custom={custom}
      dangerouslySetInnerHTML={{
        __html: switchSlashToEmptySpace(value),
      }}
    />
  ) : (
    value
  );
};

export default memo(DangerouslyHtml);
