declare module 'react-jss' {
  export function createUseStyles<
    TStyle extends (
      theme: Theme
    ) => Record<Extract<ReturnType<TStyle>, string>, string>
  >(
    style: TStyle
  ): (data?: any) => Record<Extract<keyof ReturnType<TStyle>, string>, string>;

  export function createUseStyles<TStyle>(
    style: TStyle
  ): (data?: any) => Record<Extract<keyof TStyle, string>, string>;
}
