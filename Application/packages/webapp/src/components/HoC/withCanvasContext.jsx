import React, { createContext } from 'react';

export const CANVAS_BG_DEFAULT_VALUE = {
  bg: '',
  setBg: () => {},
  contain: true,
  setContain: () => {},
};

export const CanvasContext = createContext(CANVAS_BG_DEFAULT_VALUE);

export const useCanvasContext = () => {
  const [bg, setBg] = React.useState('');
  const [contain, setContain] = React.useState(true);
  return { bg, setBg, contain, setContain: Boolean };
};

export default { CanvasContext, useCanvasContext };

// export const CanvasBgContextProvider = (props: {
//
// }) => {
//   const [bg, setBg] = useState();
//   return (
//     <CanvasBgContext.Provider
//       value={{
//         action: image => {
//           setBg(image);
//         }
//       }}
//     >
//       {props.children}
//     </CanvasBgContext.Provider>
//   );
// };
//
