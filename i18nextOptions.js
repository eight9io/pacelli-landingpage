export default {
  debug: process.env.NODE_ENV !== 'production',
  fallbackLng: 'it',
  supportedLngs: ['en', 'it'],
  defaultNS: 'common',
  react: {useSuspense: false},
};
