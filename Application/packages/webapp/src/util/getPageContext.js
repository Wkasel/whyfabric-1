import { Theme, createGenerateClassName } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';

import { GenerateClassName, SheetsRegistry } from 'jss';
import MainTheme from '../theme/MainTheme';
// import SecondaryTheme from "./themes/SecondaryTheme";

function createPageContext() {
  return {
    // children: undefined as any,

    // The standard class name generator.
    // @ts-ignore
    generateClassName: createGenerateClassName(),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    theme: MainTheme,
    themes: {
      MainTheme,
    },
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
