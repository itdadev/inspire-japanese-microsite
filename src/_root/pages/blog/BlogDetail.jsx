import React from 'react';
import {useParams} from "react-router-dom";
import {useSuspenseQuery} from "@tanstack/react-query";
import {BLOG_DETAIL_KEY, BLOG_TAG_LIST_KEY} from "@/constants/queryKeys";
import axios from "axios";
import {BLOG_LIST_URL, BLOG_TAG_LIST} from "@/constants/apiUrls";
import {CommonContainer, DetailPageHero} from "@/components/ui/container";
import {DangerouslyHtml} from "@/components/ui/item";
import {CommonDescTwo, CommonTitleThree} from "@/components/ui/text/CommonTexts";
import styled from "@emotion/styled";
import {image} from "@/theme";
import {PrimaryButton} from "@/components/ui/button";
import {TagItem} from "@/_root/pages/blog/BlogTagList";

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7.2rem 0',
  margin: '12rem 0',
}));

const ButtonWrapper = styled.div(() => ({
  marginTop: '8rem',
  maxWidth: '32rem',
  width: '100%',
}))

const TagList = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  gap: '0 0.4rem',
  width: '100%',
}))

const BlogDetail = () => {
  const {blogAlias} = useParams();

  const { data: blogDetail } = useSuspenseQuery({
    queryKey: [
      BLOG_DETAIL_KEY,
      blogAlias
    ],

    queryFn: () =>
      axios.get(
        `${BLOG_LIST_URL}?url_alias=/${blogAlias}`
      ),
    select: (data) => data.data[0],
  });

  const { data: blogTagList } = useSuspenseQuery({
    queryKey: [
      BLOG_TAG_LIST_KEY,
    ],

    queryFn: () =>
      axios.get(
        `${BLOG_TAG_LIST}`
      ),
    select: (data) => data.data,
  });

  return (
    <div>
      <DetailPageHero data={blogDetail}/>

      <CommonContainer>
        <Wrapper>
          <img src={image.articleLogo.default} alt="INSPIRE ENTERTAINMENT RESORT" width={160} height={160}/>

          <CommonTitleThree>
            {blogDetail.field_name}
          </CommonTitleThree>

          <CommonDescTwo>
            <DangerouslyHtml value={blogDetail.field_full_description}/>
          </CommonDescTwo>

          <TagList>
            {blogDetail.field_category_tags?.map((tag) => {
              return (<TagItem nonClickable key={tag}>#{blogTagList.filter(el => el.tid === tag)?.[0]?.name}</TagItem>)
            })}
          </TagList>

          <ButtonWrapper>
            <PrimaryButton linkTo='/' thick>Back to List</PrimaryButton>
          </ButtonWrapper>
        </Wrapper>
      </CommonContainer>
    </div>
  );
};

export default BlogDetail;
