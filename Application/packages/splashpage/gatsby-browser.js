/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactDOM from 'react-dom';
import 'typeface-roboto';
export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
