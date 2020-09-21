import { DOMAIN } from './jsSettings';

const PORT = process.env.PORT || 5000;

const TITLE = 'WhyFabric';

const DEV = process.env.NODE_ENV !== 'production';

const API_DOMAIN = `http://localhost:${PORT}`;
const API_TOKEN = '';

const NODE =
  typeof 'process' !== 'undefined' &&
  process &&
  process.versions &&
  Boolean(process.versions.node);

const BROWSER = typeof window !== 'undefined';

const OTHER = {
  IS_SERVER: typeof window === 'undefined',
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
  NODE_ENV: process.env.NODE_ENV,
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: process.env.NODE_ENV === 'production',
  GA_TRACKING_ID: process.env.GA_TRACKING_ID || 'XXX-XXX-XXX',
  API_URL: process.env.API_URL,
};

const common = {
  API_DOMAIN,
  API_TOKEN,
  BROWSER,
  DEV,
  DOMAIN,
  NODE,
  PORT,
  TITLE,
  OTHER,
};

export { common };
