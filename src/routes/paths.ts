// import { _id, _postTitles } from 'src/_mock/assets';
// import { paramCase } from 'src/utils/change-case';


// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
      otp: `${ROOTS.AUTH}/jwt/otp`,
    },
  },
  dashboard: {
    error: {
      page403: '/dashboard/error/403',
      page404: '/dashboard/error/404',
      page500: '/dashboard/error/500',
    },
    root: ROOTS.DASHBOARD,
    blank: `${ROOTS.DASHBOARD}/blank`,
  },
};
