import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

import { config } from '@config/settings';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(XHR)
  .init({
    defaultNS: 'en',
    backend: config.translation.localesXhrConfig,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
