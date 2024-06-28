import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { image } from '@/theme';
import { RiCloseCircleLine } from '@remixicon/react';
import { mq } from '@/lib/react-responsive/mediaQuery';

const Container = styled.form(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 1rem',
  margin: '6rem 0',

  [mq('desktop')]: {
    maxWidth: '50%',
    margin: '6rem auto',
  },
}));

const Wrapper = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  border: `2px solid ${theme.color.point01}`,
  borderRadius: '6rem',
  height: '4rem',
  gap: '0 2rem',
}));

const StyledInput = styled.input(() => ({
  flex: 1,
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px solid ${theme.color.point01}`,
  borderRadius: '50%',
  width: '4rem',
  height: '4rem',

  transition: 'all 0.3s',

  '&:hover': {
    background: 'rgba(104, 80, 124, 0.5)',
  },
}));

const BlogSearchBar = ({ setSearchKeyword, listRef, setPage, staticTexts }) => {
  const [keyword, setKeyword] = useState('');

  const changeKeywordInput = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  const submitSearchKeyword = useCallback(
    (e) => {
      e.preventDefault();
      setPage(1);

      setSearchKeyword(keyword);
    },
    [setSearchKeyword, keyword, setPage]
  );

  const clearSearchKeyword = useCallback(() => {
    setSearchKeyword('');
    setKeyword('');
  }, [setSearchKeyword]);

  return (
    <Container onSubmit={submitSearchKeyword} ref={listRef}>
      <Wrapper>
        <StyledInput
          type="text"
          placeholder={staticTexts?.field_search_bar_description}
          value={keyword}
          onChange={(e) => changeKeywordInput(e)}
        />

        {keyword !== '' && (
          <Button type="button" onClick={clearSearchKeyword}>
            <RiCloseCircleLine color="#d4d4d4" />
          </Button>
        )}
      </Wrapper>

      <SearchButton type="submit">
        <img src={image.searchIcon.default} alt="" width={24} />
      </SearchButton>
    </Container>
  );
};

export default BlogSearchBar;
