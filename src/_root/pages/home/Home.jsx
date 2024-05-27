// NOTE: 메인 화면 부모 컴포넌트입니다. 섹션 1, 2, 3을 import합니다.
import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {image} from "@/theme";
import axios from "axios";

import {CommonContainer, ListContainer} from "@/components/ui/container";
import {CommonDescOne, CommonTitleOne} from "@/components/ui/text/CommonTexts";
import {ImageFigure, MuiPagination} from "@/components/ui/item";
import {BLOG_LIST_KEY} from "@/constants/queryKeys";
import {useSuspenseQuery} from "@tanstack/react-query";
import {BLOG_LIST_URL} from "@/constants/apiUrls";
import {BlogItem, BlogSearchBar, BlogTagList} from "@/_root/pages/blog";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ErrorManage} from "@/lib/react-query/ErrorManage";

const Container = styled.div(() => ({}));

const Wrapper = styled.div(() => ({
  padding: '8rem 0'
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
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState("")

  const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [searchParams]=useSearchParams();
  const currentPage = searchParams.get('page') ? searchParams.get('page') : 1;

  const [page, setPage] = useState(currentPage);

  const { data: blogList, isError, isFetching } = useSuspenseQuery({
    queryKey: [
      BLOG_LIST_KEY,
      page,
      selectedCategoryId,
      searchKeyword
    ],

    queryFn: () =>
      axios.get(
        `${BLOG_LIST_URL}?page=${page - 1}${selectedCategoryId.length > 0 ? `&filter=${selectedCategoryId}`: ""}&title=${searchKeyword}`
      ),
    select: (data) => data.data,
  });

  useEffect(() => {
    navigate(`/?page=${page}`)
  }, [page]);

  return (
    <Container>
      <ImageFigure src={image.bannerImage} alt="INSPIRE ENTERTAINMENT RESORT" ratio="9 / 2" local />

      <CommonContainer>
        <Wrapper>
          <TitleWrapper>
            <CommonTitleOne>INSPIRE Blog</CommonTitleOne>

            <CommonDescOne>Follow the latest news on INSPIRE Entertainment Resort here.</CommonDescOne>
          </TitleWrapper>

          <BlogSearchBar setSearchKeyword={setSearchKeyword} />

          <BlogTagList selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} setPage={setPage}/>

          <ErrorManage isFetching={isFetching} isError={isError}>
            <ListContainer>
              {blogList.map((item) => {
                return (
                  <BlogItem item={item} key={item.url_alias}/>
                )
              })}
            </ListContainer>
          </ErrorManage>

          <MuiPagination page={page} setPage={setPage} count={2}/>
        </Wrapper>
      </CommonContainer>
    </Container>
  );
};

export default Home;