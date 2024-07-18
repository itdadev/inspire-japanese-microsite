import React from 'react';
import { CommonContainer } from '@/components/ui/container';
import { DangerouslyHtml } from '@/components/ui/item';
import { IsDesktop, mq } from '@/lib/react-responsive/mediaQuery';
import styled from '@emotion/styled';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '3rem 0',
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  background: theme.color.white,
  fontSize: '1.2rem',

  [mq('desktop')]: {
    flexDirection: 'row',
    gap: '0 14rem',
  },
}));

const FooterBottomWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',

  [mq('mobile')]: {
    gap: '1rem 0',
  },

  [mq('desktop')]: {
    gap: '4rem 0',
    flexDirection: 'row',
  },
}));

const SnsWrapper = styled.section(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem 0',
  textTransform: 'uppercase',

  [mq('desktop')]: {
    gap: '0 3rem',
    flexDirection: 'row',
  },
}));

const LinkGroup = styled.ul(() => ({
  display: 'flex',
  gap: '1rem 3rem',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',

  [mq('desktop')]: {
    gap: '0 2rem',
    flexWrap: 'nowrap',
  },

  a: {
    display: 'block',
  },

  object: {
    height: '3rem',
    pointerEvents: 'none',
  },
}));

const CopyRight = styled.div(() => ({
  textAlign: 'center',

  [mq('desktop')]: {
    textAlign: 'left',
  },
}));
const FooterBottom = ({ footerSns, footerAddress }) => {
  return (
    <Container>
      <CommonContainer>
        <FooterBottomWrapper>
          <section>
            <CopyRight>
              <DangerouslyHtml value={footerAddress?.field_copyright_footer} />
            </CopyRight>
          </section>

          <SnsWrapper>
            <IsDesktop>
              {/*NOTE: connect with us*/}
              <b>フォローはこちらから</b>
            </IsDesktop>

            <LinkGroup>
              {footerSns?.field_facebook_connection !== '' && (
                <li>
                  <a href={footerSns?.field_facebook_connection} target="_blank" rel="noreferrer">
                    {footerSns?.field_facebook_connection_logo && (
                      <object
                        data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerSns?.field_facebook_connection_logo[0]?.src}`}
                        aria-labelledby={footerSns.field_facebook_connection_logo[0]?.alt}
                      />
                    )}
                  </a>
                </li>
              )}

              {footerSns?.field_instagram !== '' && (
                <li>
                  <a href={footerSns?.field_instagram} target="_blank" rel="noreferrer">
                    {footerSns?.field_instagram_connection_logo && (
                      <object
                        type="image/svg+xml"
                        data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerSns?.field_instagram_connection_logo[0]?.src}`}
                        aria-labelledby={footerSns.field_instagram_connection_logo[0]?.alt}
                      />
                    )}
                  </a>
                </li>
              )}

              {footerSns?.field_kakao_connection !== '' && (
                <li>
                  <a href={footerSns?.field_kakao_connection} target="_blank" rel="noreferrer">
                    {footerSns?.field_kakao_connection_logo && (
                      <object
                        type="image/svg+xml"
                        data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerSns?.field_kakao_connection_logo[0]?.src}`}
                        aria-labelledby={footerSns.field_kakao_connection_logo[0]?.alt}
                      />
                    )}
                  </a>
                </li>
              )}

              {footerSns?.field_wechat_connection !== '' && (
                <li>
                  <a href={footerSns?.field_wechat_connection} target="_blank" rel="noreferrer">
                    {footerSns?.field_wechat_connection_logo && (
                      <object
                        type="image/svg+xml"
                        data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerSns?.field_wechat_connection_logo[0]?.src}`}
                        aria-labelledby={footerSns.field_wechat_connection_logo[0]?.alt}
                      />
                    )}
                  </a>
                </li>
              )}

              {footerSns?.field_naver_connection !== '' && (
                <li>
                  <a href={footerSns?.field_naver_connection} target="_blank" rel="noreferrer">
                    {footerSns?.field_naver_connection_logo && (
                      <object
                        type="image/svg+xml"
                        data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerSns?.field_naver_connection_logo[0]?.src}`}
                        aria-labelledby={footerSns.field_naver_connection_logo[0]?.alt}
                      />
                    )}
                  </a>
                </li>
              )}
            </LinkGroup>
          </SnsWrapper>
        </FooterBottomWrapper>
      </CommonContainer>
    </Container>
  );
};

export default FooterBottom;
