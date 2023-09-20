export default {
  debug: process.env.NODE_ENV !== 'production',
  fallbackLng: 'en',
  supportedLngs: ['en', 'it'],
  defaultNS: 'common',
  react: {useSuspense: false},
};
