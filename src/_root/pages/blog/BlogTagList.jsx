import React, {useCallback} from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import {BLOG_TAG_LIST_KEY} from "@/constants/queryKeys";
import axios from "axios";
import {BLOG_TAG_LIST} from "@/constants/apiUrls";
import styled from "@emotion/styled";
import {RiRestartLine} from "@remixicon/react";
import {useLocation} from "react-router-dom";

const TagList = styled.div(() => ({
  display: 'flex',
  gap: "0.4rem",
  flexWrap: 'wrap',
  marginBottom: '2rem',
}));

export const TagItem = styled.button(({ theme, refresh, active, nonClickable }) => ({
  borderRadius: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: refresh === "true"  ? "0.4rem" : '0.4rem 1.2rem',
  transition: 'all 0.3s',
  background: active ? theme.color.point01 : "white",
  border: active ? `1px solid ${theme.color.point01}` : `1px solid #D6D6D6`,
  color: active ? "white" : "black",
  cursor: nonClickable ? "default" : "pointer",
  pointerEvents: nonClickable ? 'none' : "normal",

  "&:hover": {
    color: "white",
    background: theme.color.point01,
    border: `1px solid ${theme.color.point01}`,
  }
}));

// const ResetButton = styled(RiRestartLine)(() => ({
//   "&:hover": {
//     color: "white",
//   }
// }))

const BlogTagList = ({selectedCategoryId, setSelectedCategoryId, setPage }) => {
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

  const toggleFilters = useCallback((id) => {
    setPage(1);

    if(selectedCategoryId.includes(id)) {
      setSelectedCategoryId(prev => prev.filter(word => word !== id));

      return;
    }

    setSelectedCategoryId((prev) => [...prev, id]);


  }, [selectedCategoryId, setSelectedCategoryId, setPage]);

  // const resetFilters = useCallback(
  //   () => {
  //     setSelectedCategoryId([])
  //   },
  //   [setSelectedCategoryId],
  // );


  return (
    <TagList>
      {
        blogTagList.map((item) => {
          return (
            <TagItem active={selectedCategoryId.includes(item.tid)} onClick={() => toggleFilters(item.tid)} key={item.tid}>#{item.name.toLowerCase()}</TagItem>
          );
        })
      }

      {/*<TagItem refresh="true">*/}
      {/*  <ResetButton*/}
      {/*    onClick={resetFilters}*/}
      {/*    size={24} // set custom `width` and `height`*/}
      {/*  />*/}
      {/*</TagItem>*/}
    </TagList>
  );
};

export default BlogTagList;
