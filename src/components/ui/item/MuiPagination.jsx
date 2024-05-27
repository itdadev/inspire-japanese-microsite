import React from "react";


import styled from "@emotion/styled";
import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Container = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8rem",
}));


const StyledPagination = styled(Pagination)(({ theme }) => ({
  ".MuiPagination-ul": {
    gap: "0 1rem",
  },

  "&.Mui-selected": {
    color: theme.color.point01,
  },
}));

const MuiPagination = ({  count, page, setPage }) => {
  const handleChange = (_, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
