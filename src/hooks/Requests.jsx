import axios from 'axios';
import { useQuery, useSuspenseQueries } from '@tanstack/react-query';

import {
  BLOG_STATIC_TEXTS_KEY,
  FOOTER_ADDRESS_KEY,
  FOOTER_CONTACT_KEY,
  FOOTER_MENU_KEY,
  FOOTER_SNS_KEY,
} from '@/constants/queryKeys';
import {
  BLOG_STATIC_TEXTS_LIST_URL,
  FOOTER_ADDRESS_URL,
  FOOTER_CONTACT_URL,
  FOOTER_MENU_URL,
  FOOTER_SNS_URL,
} from '@/constants/apiUrls';

export function useGetStaticTexts() {
  return useQuery({
    queryKey: [BLOG_STATIC_TEXTS_KEY],
    queryFn: () => axios.get(`${BLOG_STATIC_TEXTS_LIST_URL}`),
    select: (data) => data.data[0],
  });
}

// Footer.jsx
export function useGetFooterInformation() {
  return useSuspenseQueries({
    queries: [
      {
        queryKey: [FOOTER_ADDRESS_KEY],
        queryFn: () => axios.get(`${FOOTER_ADDRESS_URL}&language=ja`),
        select: (data) => data.data[0],
      },
      {
        queryKey: [FOOTER_MENU_KEY],
        queryFn: () => axios.get(`${FOOTER_MENU_URL}&language=ja`),
        select: (data) => data.data.data,
      },
      {
        queryKey: [FOOTER_CONTACT_KEY],
        queryFn: () => axios.get(`${FOOTER_CONTACT_URL}&language=ja`),
        select: (data) => data.data[0],
      },
      {
        queryKey: [FOOTER_SNS_KEY],
        queryFn: () => axios.get(`${FOOTER_SNS_URL}&language=ja`),
        select: (data) => data.data[0],
      },
    ],
  });
}
