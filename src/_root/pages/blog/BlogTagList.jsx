import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { BLOG_TAG_LIST_KEY } from '@/constants/queryKeys';
import axios from 'axios';
import { BLOG_TAG_LIST } from '@/constants/apiUrls';

const TagList = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  flexWrap: 'wrap',
  marginBottom: '2rem',
}));

export const TagItem = styled.button(({ theme, refresh, active, nonClickable }) => ({
  borderRadius: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: refresh === 'true' ? '0.4rem' : '0.4rem 1.2rem',
  transition: 'all 0.3s',
  background: active ? theme.color.point01 : 'white',
  border: active ? `1px solid ${theme.color.point01}` : `1px solid #D6D6D6`,
  color: active ? 'white' : 'black',

  cursor: nonClickable ? 'default' : 'pointer',
  pointerEvents: nonClickable ? 'none' : 'normal',

  '&:hover': {
    color: 'white',
    background: theme.color.point01,
    border: `1px solid ${theme.color.point01}`,
  },
}));

const BlogTagList = ({ selectedTags, setSelectedTags, setPage, staticTexts }) => {
  const { data: blogTagList } = useQuery({
    queryKey: [BLOG_TAG_LIST_KEY, selectedTags],
    queryFn: () => axios.get(`${BLOG_TAG_LIST}`),
    select: (data) => data.data.top_hash_tags,
  });

  const toggleFilters = useCallback(
    (id) => {
      setPage(1);

      if (selectedTags.includes(id)) {
        setSelectedTags((prev) => prev.filter((word) => word !== id));

        return;
      }

      setSelectedTags((prev) => [...prev, id]);
    },
    [selectedTags, setSelectedTags, setPage]
  );

  return (
    <TagList>
      <div>{staticTexts?.field_top_10_text}</div>

      {blogTagList?.map((tag) => {
        return (
          <TagItem
            key={tag.id}
            active={selectedTags.includes(tag.name)}
            onClick={() => toggleFilters(tag.name)}
          >
            #{tag.name}
          </TagItem>
        );
      })}
    </TagList>
  );
};

export default BlogTagList;
