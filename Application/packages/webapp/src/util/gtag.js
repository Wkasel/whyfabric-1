// import { GA_TRACKING_ID } from "@config/config";
//
const GA_TRACKING_ID = 'xxx-xxx-xxxx';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    page_location: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    // eslint-disable-next-line @typescript-eslint/camelcase,
    event_category: category,
    // eslint-disable-next-line @typescript-eslint/camelcase
    event_label: label,
    value,
  });
};
// export const event = ({
//   action, category, label, value,
// }: GaEventI): void => {
//   window.gtag('event', action, {
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     event_category: category,
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     event_label: label,
//     value,
//   });
// };
