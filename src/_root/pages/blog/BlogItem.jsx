import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { DangerouslyHtml, ImageFigure } from '@/components/ui/item';
import { PrimaryButton } from '@/components/ui/button';
import { LOCAL_STORAGE_PAGE } from '@/constants/storageKey';
import { TagListType1, TagListType2, TagListType3 } from '@/_root/pages/blog/TagLists';

const Container = styled.div(() => ({
  borderRadius: '1.5rem',
  overflow: 'hidden',
  boxShadow: '10px 10px 20px rgba(0,0,0,0.1)',
  maxHeight: '47rem',
  height: '100%',
}));

const TitleWrapper = styled.div(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem 0',
  textAlign: 'center',
  marginBottom: '1rem',
}));

const Title = styled.header(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: theme.fontWeight.medium,
  minHeight: '2.6rem',
}));

const Date = styled.div(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.color.grey01,
}));

const Description = styled.div(() => ({
  marginBottom: '1rem',
  minHeight: '4rem',
}));

const ContentWrapper = styled.div(() => ({
  padding: '1rem 2rem',
  minHeight: '24.5rem',
}));

const ContentIn = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const BlogItem = ({ item, page, staticTexts }) => {
  const containerRef = useRef(null);

  const [visibleTags, setVisibleTags] = useState(item?.field_hash_tags);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const storePage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_PAGE, page);
  }, [page]);

  useEffect(() => {
    const checkOverflow = () => {
      const container = containerRef.current;

      if (container?.scrollWidth > container?.clientWidth) {
        setIsOverflowing(true);

        // 동적으로 줄어든 해쉬태그 리스트 생성
        let totalWidth = 0;

        let newVisibleTags = [];

        for (const tag of item?.field_hash_tags) {
          const tagElement = document.createElement('span');

          tagElement.style.visibility = 'hidden';

          tagElement.style.whiteSpace = 'nowrap';

          tagElement.textContent = tag;

          container.appendChild(tagElement);

          totalWidth += tagElement.offsetWidth;

          container.removeChild(tagElement);

          if (totalWidth + 40 > container.clientWidth) break; // '...''의 너비 고려

          newVisibleTags.push(tag);
        }

        setVisibleTags(newVisibleTags);
      } else {
        setIsOverflowing(false);

        setVisibleTags(item?.field_hash_tags);
      }
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [item?.field_hash_tags]);

  return (
    <Container>
      <ImageFigure src={item.field_thumbnail} alt={item.field_name} ratio="3 / 2" maxHeight={220}>
        <TagListType1 item={item} />
      </ImageFigure>

      <ContentWrapper>
        <ContentIn>
          <TitleWrapper>
            <TagListType2
              item={item}
              containerRef={containerRef}
              visibleTags={visibleTags}
              isOverflowing={isOverflowing}
            />

            <Title className="ellipsis-1">{item.field_name}</Title>

            {item.field_post_date && <Date>{item.field_post_date}</Date>}

            <Description>
              <DangerouslyHtml value={item.field_short_description} className="ellipsis-2" />
            </Description>
          </TitleWrapper>

          <PrimaryButton maxWidth="100%" linkTo={`/news${item.view_node}`} buttonEvent={storePage}>
            {staticTexts?.field_view_detail_button_text}
          </PrimaryButton>
        </ContentIn>

        <TagListType3
          item={item}
          containerRef={containerRef}
          visibleTags={visibleTags}
          isOverflowing={isOverflowing}
        />
      </ContentWrapper>
    </Container>
  );
};

export default BlogItem;
