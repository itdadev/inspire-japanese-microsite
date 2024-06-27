import React from 'react';
import { Skeleton } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid hotpink',
}));

const StyledSkeleton = styled(Skeleton)(() => ({
  borderRadius: '1.2rem 1.2rem 0 0',
}));

const BlogItemSkeleton = () => {
  return (
    <Container>
      <StyledSkeleton variant="rectangular" width="100%" height="220px"></StyledSkeleton>

      <Skeleton variant="text" width="80%" height="10%"></Skeleton>
      <Skeleton variant="text" width="50%" height="10%"></Skeleton>

      <Skeleton variant="text" width="100%" height="10%"></Skeleton>
    </Container>
  );
};

export default BlogItemSkeleton;
