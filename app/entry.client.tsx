import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';

import i18next from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import {getInitialNamespaces} from 'remix-i18next';
import i18nextOptions from '../i18nextOptions';
// import { hydrate } from 'react-dom'

// if (!i18next.isInitialized)
//   // prevent i18next to be initialized multiple times
//   i18next
//     .use(initReactI18next) // Tell i18next to use the react-i18next plugin
//     .use(LanguageDetector) // Setup a client-side language detector
//     .use(Backend) // Setup your backend
//     .init({
//       ...i18nextOptions,
//       backend: {loadPath: '/locales/{{lng}}/{{ns}}.json'},
//       // This function detects the namespaces your routes rendered while SSR use
//       // and pass them here to load the translations
//       ns: getInitialNamespaces(),
//       detection: {
//         // Here only enable htmlTag detection, we'll detect the language only
//         // server-side with remix-i18next, by using the `<html lang>` attribute
//         // we can communicate to the client the language detected server-side
//         order: ['htmlTag'],
//         // Because we only use htmlTag, there's no reason to cache the language
//         // on the browser, so we disable it
//         caches: [],
//       },
//     })
//     .then(() => {
//       return startTransition(() => {
//         hydrateRoot(
//           document,
//           <StrictMode>
//             <I18nextProvider i18n={i18next}>
//               <RemixBrowser />
//             </I18nextProvider>
//           </StrictMode>,
//         );
//       });
//     });

// startTransition(() => {
//   hydrateRoot(
//     document,
//     <StrictMode>
//       <I18nextProvider i18n={i18next}>
//         <RemixBrowser />
//       </I18nextProvider>
//     </StrictMode>,
//   );
// });

async function hydrate() {
  if (!i18next.isInitialized)
    await i18next
      .use(initReactI18next) // Tell i18next to use the react-i18next plugin
      // .use(LanguageDetector) // Setup a client-side language detector
      // .use(resourcesToBackend(resources))
      .use(Backend) // Setup your backend
      .init({
        ...i18nextOptions,
        backend: {loadPath: '/locales/{{lng}}/{{ns}}.json'},
        // This function detects the namespaces your routes rendered while SSR use
        // and pass them here to load the translations
        ns: getInitialNamespaces(),
        detection: {
          // Here only enable htmlTag detection, we'll detect the language only
          // server-side with remix-i18next, by using the `<html lang>` attribute
          // we can communicate to the client the language detected server-side
          order: ['htmlTag'],
          // Because we only use htmlTag, there's no reason to cache the language
          // on the browser, so we disable it
          caches: [],
        },
      });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
