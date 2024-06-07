import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import { CommonContainer, ListContainer } from '@/components/ui/container';
import { CommonDescOne, CommonTitleOne } from '@/components/ui/text/CommonTexts';
import { MuiPagination } from '@/components/ui/item';
import { BLOG_LIST_KEY } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { BLOG_LIST_URL } from '@/constants/apiUrls';
import { BlogItem, BlogSearchBar, BlogTagList } from '@/_root/pages/blog';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Banner } from '@/components/shared/banner';

const Container = styled.div(() => ({}));

const Wrapper = styled.div(() => ({
  padding: '8rem 0',
}));

const TitleWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem 0',
  marginBottom: '8rem',
}));

const Home = () => {
  const listRef = useRef(null);

  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedTags, setSelectedTags] = useState([]);
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ? searchParams.get('page') : 1;

  const [page, setPage] = useState(currentPage);

  const { data: blogList } = useQuery({
    queryKey: [BLOG_LIST_KEY, page, selectedTags, searchKeyword],
    queryFn: () =>
      axios.get(
        `${BLOG_LIST_URL}?page=${page - 1}${
          selectedTags.length > 0 ? `&hashTags=${selectedTags}` : ''
        }&keyword=${searchKeyword}`
      ),
    select: (data) => data.data,
  });

  useEffect(() => {
    navigate(
      `/?page=${page}${selectedTags.length > 0 ? `&tags=${selectedTags}` : ''}${
        searchKeyword !== '' ? `&keyword=${searchKeyword}` : ''
      }`
    );
  }, [page, searchKeyword, selectedTags]);

  return (
    <Container>
      <Banner />

      <CommonContainer>
        <Wrapper>
          <TitleWrapper>
            <CommonTitleOne>INSPIRE Blog</CommonTitleOne>

            <CommonDescOne>
              Follow the latest news on INSPIRE Entertainment Resort here.
            </CommonDescOne>
          </TitleWrapper>

          <BlogSearchBar setSearchKeyword={setSearchKeyword} listRef={listRef} setPage={setPage} />

          <BlogTagList
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            setPage={setPage}
          />

          <ListContainer>
            {blogList.rows.map((item) => {
              return <BlogItem item={item} key={item.view_node} page={page} />;
            })}
          </ListContainer>

          <MuiPagination
            page={page}
            setPage={setPage}
            count={blogList.pager.total_pages}
            listRef={listRef}
          />
        </Wrapper>
      </CommonContainer>
    </Container>
  );
};

export default Home;
