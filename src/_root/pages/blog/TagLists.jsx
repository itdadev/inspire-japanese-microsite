import React from 'react';
import styled from '@emotion/styled';

const TagWrapper = styled.div(({ margin }) => ({
  display: 'flex',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
  margin: margin ? margin : '2rem 0',
}));

const TagVersionTwo = styled.div(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: 1,
  gap: '0.4rem',
  overflowX: 'hidden',
  paddingBottom: '0.1rem',

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

const Ellipsis = styled.div(() => ({
  position: 'absolute',
  right: 0,
  height: '100%',
  paddingLeft: '1rem',
  background: '#fff',
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

export const TagListType1 = ({ item }) => {
  return (
    (item.field_tag_position === 'on_the_image' || item.field_tag_position === '') && (
      <TagItem>
        {item.field_hash_tags?.map((tag) => {
          return <span key={tag}>#{tag}</span>;
        })}
      </TagItem>
    )
  );
};

export const TagListType2 = ({ item, containerRef, visibleTags, isOverflowing }) => {
  return (
    item.field_tag_position === 'above_the_title' && (
      <TagWrapper margin="0">
        <TagVersionTwo ref={containerRef}>
          {visibleTags?.map((tag) => {
            return <span key={tag}>#{tag}</span>;
          })}

          {isOverflowing && <Ellipsis>...</Ellipsis>}
        </TagVersionTwo>
      </TagWrapper>
    )
  );
};

export const TagListType3 = ({ item, containerRef, visibleTags, isOverflowing }) => {
  return (
    item.field_tag_position === 'below_the_title' && (
      <TagWrapper>
        <TagVersionTwo ref={containerRef}>
          {visibleTags?.map((tag) => {
            return <span key={tag}>#{tag}</span>;
          })}
          {isOverflowing && <Ellipsis>...</Ellipsis>}
        </TagVersionTwo>
      </TagWrapper>
    )
  );
};
