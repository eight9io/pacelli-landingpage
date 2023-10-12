export default {
  debug: process.env.NODE_ENV !== 'production',
  fallbackLng: 'it',
  supportedLngs: ['it', 'en'],
  defaultNS: 'common',
  react: {useSuspense: false},
  ns: ['common', 'home', 'header'],
};
