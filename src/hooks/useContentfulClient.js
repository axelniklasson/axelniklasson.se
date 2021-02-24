import { createClient } from 'contentful';

export default function useContentfulClient() {
  return createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN,
  });
}
