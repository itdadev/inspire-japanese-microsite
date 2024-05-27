import React, {useCallback, useState} from 'react';
import styled from "@emotion/styled";
import {image} from "@/theme";
import {RiCloseCircleLine} from "@remixicon/react";

const Container = styled.form(() => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '50%',
  margin: '6rem auto',
  gap: '0 1rem',
}))

const Wrapper = styled.div(({theme}) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  border: `2px solid ${theme.color.point01}`,
  borderRadius: '6rem',
  height: '4rem',
  gap: '0 2rem'
}));

const StyledInput = styled.input(() => ({
  flex:1,
  display: 'inline-block',
  height: '100%',
  fontSize: '1.6rem',
  outline: 'none',
}));

const Button = styled.button(() => ({
  height: '2.4rem',
  display: 'inline-block',
}));

const SearchButton = styled.button(({ theme }) => ({
  border: `2px solid ${theme.color.point01}`,
  borderRadius: '50%',
  width: '4rem',
  height: '4rem',

  transition: 'all 0.3s',

  "&:hover" : {
    background: "rgba(104, 80, 124, 0.5)"
  }
}));


const BlogSearchBar = ({  setSearchKeyword }) => {
  const [keyword, setKeyword] = useState("");

  const changeKeywordInput = useCallback(
    (e) => {
      setKeyword(e.target.value)
    },
    [setKeyword],
  );

  const submitSearchKeyword = useCallback((e) => {
    e.preventDefault();

    setSearchKeyword(keyword);

  }, [setSearchKeyword, keyword]);

  const clearSearchKeyword = useCallback(() => {
    setSearchKeyword("");
    setKeyword("")

  }, [setSearchKeyword]);

  return (
    <Container onSubmit={submitSearchKeyword}>
      <Wrapper>
        <StyledInput
          type="text"
          placeholder="Search with title..."
          value={keyword}
          onChange={(e) => changeKeywordInput(e)}
        />

        {
          keyword !== "" &&
          <Button type="button" onClick={clearSearchKeyword}>
            <RiCloseCircleLine color="#d4d4d4"/>
          </Button>
        }

      </Wrapper>

      <SearchButton type="submit">
        <img src={image.searchIcon.default} alt="" width={24}/>
      </SearchButton>
    </Container>
  );
};

export default BlogSearchBar;
