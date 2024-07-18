import React from 'react';
import { DangerouslyHtml } from '@/components/ui/item';
import { IsDesktop, mq } from '@/lib/react-responsive/mediaQuery';
import styled from '@emotion/styled';
import { FOOTER_LOGO_ZINDEX } from '@/constants/zIndex';
import { Link } from 'react-router-dom';

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  paddingBottom: '3rem',

  [mq('desktop')]: {
    gap: '0 6rem',
    flexDirection: 'row',
    paddingBottom: 0,
  },
}));

const FooterTopLeft = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%',
  margin: '0 auto',

  [mq('desktop')]: {
    gap: '4rem 0',
    maxWidth: '100%',
    margin: 0,
  },
}));

const FooterLogoWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  zIndex: FOOTER_LOGO_ZINDEX,
  margin: '3.2rem 0 5rem',

  [mq('desktop')]: {
    padding: '8rem 4rem',
    height: '100%',
    margin: 0,
  },
}));

const FooterLogo = styled.object(() => ({
  width: '100%',
  maxWidth: '20rem',

  [mq('desktop')]: {
    width: '25rem',
    justifyContent: 'flex-end',
  },
}));

const Address = styled.address(({ theme }) => ({
  marginBottom: '1.8rem',
  fontStyle: 'normal',
  lineHeight: 1.2,
  fontWeight: theme.fontWeight.bold,

  '& p + p': {
    margin: 0,
  },
}));

const MenuWrapper = styled.div(() => ({
  marginBottom: '1rem',
  fontSize: '1.4rem',
  lineHeight: '1.5em',
}));

const MenuTitle = styled(Link)(({ theme }) => ({
  display: 'block',
  marginBottom: '3rem',
  fontWeight: theme.fontWeight.bold,
  fontSize: '1.8rem',
}));

const FooterLink = styled(Link)(({ theme, bold }) => ({
  fontWeight: bold === 'true' ? theme.fontWeight.bold : theme.fontWeight.regular,
}));

const FooterNav = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem 0',
  maxWidth: '20rem',
  margin: '0 auto',

  '& a:hover': {
    textDecoration: 'underline',
  },

  [mq('desktop')]: {
    margin: 0,
  },
}));

const FooterTopRight = styled.div(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem 0',

  '& section': {
    width: '100%',
  },

  '& section.center': {
    marginTop: 0,
  },

  [mq('desktop')]: {
    padding: '4rem 0',
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-start',

    '& section.center': {
      marginTop: '5.4rem',
    },
  },
}));

const FooterHotelSection = styled.section(() => ({
  maxWidth: '36rem',
}));

const SectionHeader = styled.div(({ theme }) => ({
  fontWeight: theme.fontWeight.bold,
  marginBottom: '3rem',
  lineHeight: 1.5,
  fontSize: '1.6rem',

  [mq('desktop')]: {
    fontSize: '1.8rem',
  },
}));

const ContactList = styled.ul(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
}));

const ContactItem = styled.li(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0 1.4rem',
  flexWrap: 'wrap',
}));

const FooterTop = ({ footerAddress, footerMenu, footerContact }) => {
  const INSPIRE_HOMPAGE_URL = 'https://www.inspirekorea.com';

  return (
    <Container>
      <FooterTopLeft>
        {footerAddress?.field_footerlogo && (
          <FooterLogoWrapper>
            <FooterLogo
              data={`${process.env.REACT_APP_WEBSITE_DRUPAL_URL}/${footerAddress?.field_footerlogo[0]?.src}`}
              alt={footerAddress.field_footerlogo[0]?.alt}
            />
          </FooterLogoWrapper>
        )}
      </FooterTopLeft>

      <FooterTopRight>
        <section>
          {footerMenu?.length > 0 && (
            <MenuWrapper key={footerMenu?.[0]?.entity_id}>
              <MenuTitle to={`/ja${footerMenu?.[0]?.url}`}>
                <DangerouslyHtml value={footerMenu?.[0]?.title} />
              </MenuTitle>

              <FooterNav>
                {footerMenu?.[0]?.children.map((link) => {
                  return (
                    <FooterLink
                      to={`${INSPIRE_HOMPAGE_URL}/ja${link.url}`}
                      key={link.entity_id}
                      target="_blank"
                    >
                      <DangerouslyHtml value={link.title} />
                    </FooterLink>
                  );
                })}
              </FooterNav>
            </MenuWrapper>
          )}
        </section>

        <section className="center">
          {footerMenu?.length > 0 && (
            <MenuWrapper key={footerMenu?.[1].entity_id}>
              <FooterNav>
                {footerMenu?.[1]?.children.map((link) => {
                  return (
                    <FooterLink
                      to={`${INSPIRE_HOMPAGE_URL}/ja${link.url}`}
                      key={link.entity_id}
                      target="_blank"
                    >
                      <DangerouslyHtml value={link.title} />
                    </FooterLink>
                  );
                })}
              </FooterNav>
            </MenuWrapper>
          )}
        </section>

        <FooterHotelSection>
          <IsDesktop>
            <SectionHeader>
              {/*NOTE: Hotel Reservation*/}
              予約問い合わせ
            </SectionHeader>
          </IsDesktop>

          <Address>
            <div>
              <DangerouslyHtml value={footerAddress?.field_address_line_1} />
            </div>

            <div>
              <DangerouslyHtml value={footerAddress?.field_address_line_2} />
            </div>
          </Address>

          <ContactList>
            <ContactItem>
              <span>
                {/*NOTE: phone*/}
                電話
              </span>

              <a href={`tel:${footerContact?.field_phone_wd}`}>{footerContact?.field_phone_wd}</a>
            </ContactItem>

            <ContactItem>
              <span>
                {/*NOTE: FAX */}
                ファックス
              </span>

              <a href={`tel:${footerContact?.field_phone_wd}`}>{footerContact?.field_fax_wd}</a>
            </ContactItem>

            <a href={`mailto:${footerContact?.field_email_wd}`} style={{ marginTop: '2rem' }}>
              {footerContact?.field_email_wd}
            </a>
          </ContactList>
        </FooterHotelSection>
      </FooterTopRight>
    </Container>
  );
};

export default FooterTop;
