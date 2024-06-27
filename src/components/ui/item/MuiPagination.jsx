import React from 'react';

import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { scrollInToViewBasic } from '@/utils/Functions';

const Container = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8rem',
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '.MuiPagination-ul': {
    gap: '0 1rem',
  },

  '&.Mui-selected': {
    color: theme.color.point01,
  },
}));

const MuiPagination = ({ count, page, setPage, listRef }) => {
  const handleChange = (_, value) => {
    setPage(value);

    scrollInToViewBasic(listRef);
  };

  return (
    <Container>
      <StyledPagination
        onChange={handleChange}
        count={count}
        page={Number(page)}
        variant="outlined"
        color="primary"
        size="large"
      />
    </Container>
  );
};

export default MuiPagination;
