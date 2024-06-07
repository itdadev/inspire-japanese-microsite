import React, { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { DangerouslyHtml, ImageFigure } from '@/components/ui/item';
import { PrimaryButton } from '@/components/ui/button';
import { LOCAL_STORAGE_PAGE } from '@/constants/storageKey';

const Container = styled.div(() => ({
  borderRadius: '1.5rem',
  overflow: 'hidden',
  boxShadow: '10px 10px 20px rgba(0,0,0,0.1)',
  maxHeight: '49rem',
  height: '100%',
}));

const TitleWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem 0',
  textAlign: 'center',
  marginBottom: '1rem',
}));

const Title = styled.header(({ theme }) => ({
  minHeight: '4.3rem',
  fontSize: '2rem',
  fontWeight: theme.fontWeight.medium,
}));

const Date = styled.div(({ theme }) => ({
  fontWeight: theme.fontWeight.medium,
}));

const Description = styled.div(() => ({
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

  span: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 0.8rem',
    fontSize: '1.2rem',
    color: 'white',
    backdropFilter: 'blur(1rem)',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '2rem',
    border: `1px solid white`,
  },
}));

const TagVersionTwo = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
  right: '1rem',
  bottom: '1rem',
  gap: '0.4rem',
  overflowX: 'hidden',
  padding: '1rem 0',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  span: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 0.8rem',
    fontSize: '1.2rem',
    color: '#555',
    backdropFilter: 'blur(1rem)',
    borderRadius: '2rem',
    border: `1px solid #d4d4d4`,
    whiteSpace: 'nowrap',
  },
}));

const ContentWrapper = styled.div(() => ({
  padding: '1rem 2rem',
}));

const TagWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
}));

const BlogItem = ({ item, page }) => {
  const tagsRef = useRef(null);

  const storePage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_PAGE, page);
  }, [page]);

  useEffect(() => {
    console.log(tagsRef.current.clientWidth);
  }, []);

  return (
    <Container>
      <ImageFigure src={item.field_thumbnail} alt={item.field_name} ratio="3 / 2" maxHeight={250}>
        {(item.field_tag_position === 'on_the_image' || item.field_tag_position === '') && (
          <TagItem ref={tagsRef} long={tagsRef.current?.clientWidth > 320}>
            {item.field_hash_tags?.map((tag) => {
              return <span key={tag}>#{tag}</span>;
            })}
          </TagItem>
        )}
      </ImageFigure>

      <ContentWrapper>
        <TitleWrapper>
          {item.field_tag_position === 'above_the_title' && (
            <TagWrapper>
              <TagVersionTwo ref={tagsRef} long={tagsRef.current?.clientWidth > 320}>
                {item.field_hash_tags?.map((tag) => {
                  return <span key={tag}>#{tag}</span>;
                })}
              </TagVersionTwo>
            </TagWrapper>
          )}

          <Title className="ellipsis-2">{item.field_name}</Title>

          <Date>{item.field_date}</Date>

          <Description>
            <DangerouslyHtml value={item.field_short_description} className="ellipsis-2" />
          </Description>

          <PrimaryButton
            linkTo={`/news${item.view_node.replace('/japan', '')}`}
            buttonEvent={storePage}
          >
            View Detail
          </PrimaryButton>
        </TitleWrapper>

        {item.field_tag_position === 'below_the_title' && (
          <TagWrapper>
            <TagVersionTwo ref={tagsRef} long={tagsRef.current?.clientWidth > 320}>
              {item.field_hash_tags?.map((tag) => {
                return <span key={tag}>#{tag}</span>;
              })}
            </TagVersionTwo>
          </TagWrapper>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default BlogItem;
