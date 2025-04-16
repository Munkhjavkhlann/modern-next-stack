// import { _id, _postTitles } from 'src/_mock/assets';
// import { paramCase } from 'src/utils/change-case';


// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export const paths = {
  dashboard: {
    root: ROOTS.DASHBOARD,
    posts: {
      root: `${ROOTS.DASHBOARD}/posts`,
      new: `${ROOTS.DASHBOARD}/posts/new`,
    },
    categories: `${ROOTS.DASHBOARD}/categories`,
    tags: `${ROOTS.DASHBOARD}/tags`,
  },
};
