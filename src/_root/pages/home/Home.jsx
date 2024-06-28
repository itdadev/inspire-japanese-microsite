import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import { CommonContainer, ListContainer } from '@/components/ui/container';
import { CommonDescOne, CommonTitleOne } from '@/components/ui/text/CommonTexts';
import { DangerouslyHtml, MuiPagination } from '@/components/ui/item';
import { BLOG_LIST_KEY, ITEMS_PER_PAGE } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { BLOG_LIST_URL } from '@/constants/apiUrls';
import { BlogItem, BlogSearchBar, BlogTagList } from '@/_root/pages/blog';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Banner } from '@/components/shared/banner';
import { useGetStaticTexts } from '@/hooks/Requests';
import { scrollInToViewBasic } from '@/utils/Functions';

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
  textAlign: 'center',
}));

const Home = ({ mainRef }) => {
  const [searchParams] = useSearchParams();
  const listRef = useRef(null);

  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');

  const [currentList, setCurrentList] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const currentPage = searchParams.get('page') ? searchParams.get('page') : 1;

  const [page, setPage] = useState(currentPage);

  const { data: blogStaticTexts } = useGetStaticTexts();

  const { data: blogList } = useQuery({
    queryKey: [BLOG_LIST_KEY, selectedTags, searchKeyword],
    queryFn: () => axios.get(`${BLOG_LIST_URL}?keyword=${searchKeyword}`),
    select: (data) => data.data,
  });

  useEffect(() => {
    navigate(
      `/?page=${page}${selectedTags.length > 0 ? `&tags=${selectedTags}` : ''}${
        searchKeyword !== '' ? `&keyword=${searchKeyword}` : ''
      }`
    );
  }, [page, searchKeyword, selectedTags, navigate]);

  useEffect(() => {
    // 페이지 진입 후 아무 액션 없을 때 리스트 화면으로 스크롤
    const timer = setTimeout(() => {
      if (window.scrollY <= 50) {
        scrollInToViewBasic(mainRef);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedTags?.length > 0) {
      setCurrentList(
        blogList?.rows.filter((article) =>
          article.field_hash_tags.some((tag) => selectedTags.includes(tag))
        )
      );
    } else {
      setCurrentList(blogList?.rows);
    }
  }, [blogList, selectedTags, page]);

  return (
    <Container>
      <Banner />

      <CommonContainer>
        <Wrapper ref={mainRef}>
          <TitleWrapper>
            <CommonTitleOne>{blogStaticTexts?.field_main_title}</CommonTitleOne>

            <CommonDescOne>
              <DangerouslyHtml value={blogStaticTexts?.field_main_description} />
            </CommonDescOne>
          </TitleWrapper>

          <BlogSearchBar
            setSearchKeyword={setSearchKeyword}
            listRef={listRef}
            setPage={setPage}
            staticTexts={blogStaticTexts}
          />

          <BlogTagList
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            setPage={setPage}
            staticTexts={blogStaticTexts}
          />

          <ListContainer>
            {currentList?.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page).map((item) => {
              return (
                <BlogItem
                  item={item}
                  key={item.view_node}
                  page={page}
                  staticTexts={blogStaticTexts}
                />
              );
            })}
          </ListContainer>

          <MuiPagination
            page={page}
            setPage={setPage}
            count={Math.ceil(currentList?.length / ITEMS_PER_PAGE)}
            listRef={listRef}
          />
        </Wrapper>
      </CommonContainer>
    </Container>
  );
};

export default Home;
