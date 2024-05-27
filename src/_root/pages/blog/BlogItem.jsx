import React from 'react';
import styled from "@emotion/styled";
import {ImageFigure} from "@/components/ui/item";
import {PrimaryButton} from "@/components/ui/button";
import {useSuspenseQuery} from "@tanstack/react-query";
import {BLOG_TAG_LIST_KEY} from "@/constants/queryKeys";
import axios from "axios";
import {BLOG_TAG_LIST} from "@/constants/apiUrls";

const Container = styled.div(() => ({
  borderRadius: '1.5rem',
  overflow: 'hidden',
  boxShadow: '10px 10px 20px rgba(0,0,0,0.1)',
}));

const TitleWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem 0',
  textAlign: 'center',
  padding: '2rem 3rem',
}));

const Title = styled.header(({ theme }) => ({
  minHeight: '4.3rem',
  fontSize: '2rem',
  fontWeight: theme.fontWeight.medium,
}));

const Date = styled.div(({theme}) => ({
  fontWeight: theme.fontWeight.medium
}));

const Description = styled.p(() => ({
  marginBottom: '1rem',
}));

const TagItem = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'absolute',
  zIndex: 1,
  right: '1rem',
  bottom: '1rem',
  gap: '0.4rem',

  span : {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 0.8rem',
    fontSize: '1.2rem',
    color: 'white',
    backdropFilter: 'blur(1rem)',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius:'2rem',
    border:`1px solid white`
  }
}));

const TagVersionTwo = styled.div(({theme}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
  right: '1rem',
  bottom: '1rem',
  gap: '0.4rem',
  padding: '0 2rem 1rem',

  span : {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 0.8rem',
    fontSize: '1.2rem',
    color: '#555',
    backdropFilter: 'blur(1rem)',
    borderRadius:'2rem',
    border:`1px solid #d4d4d4`
  }
}));

const BlogItem = ({ item }) => {
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
    <Container>
      <ImageFigure src={item.field_thumbnail[0].src} alt={item.field_thumbnail[0].alt} ratio="3 / 2">
        <TagItem>
          {
            item.field_category_tags?.map((tag) => {
              return (<span key={tag}>#{blogTagList.filter(el => el.tid === tag)?.[0]?.name}</span>)
            })
          }
        </TagItem>
      </ImageFigure>

      <TitleWrapper>
        <Title className="ellipsis-2">{item.field_name}</Title>

        <Date>{item.field_date}</Date>

        <Description className="ellipsis-2">{item.field_short_description}</Description>

        <PrimaryButton linkTo={`/news${item.url_alias}`}>View Detail</PrimaryButton>
      </TitleWrapper>

      {/*<TagVersionTwo>*/}
      {/*  {*/}
      {/*    item.field_category_tags?.map((tag) => {*/}
      {/*      return (<span key={tag}>#{blogTagList.filter(el => el.tid === tag)?.[0]?.name}</span>)*/}
      {/*    })*/}
      {/*  }*/}
      {/*</TagVersionTwo>*/}
    </Container>
  );
};

export default BlogItem;
