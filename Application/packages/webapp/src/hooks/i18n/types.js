import { Literal, Static, Union } from 'runtypes';

// export enum LngFlags {
//   "en-GB" = "🇬🇧",
//   "da-DK" = "🇩🇰"
// }

// export enum LngFlagsText {
//   "en-US" = "English"
// }

export const Lng = Union(Literal('en-US'));

export const LngShort = Union(Literal('da'), Literal('en'));

// Extract the static type
// export type Lng = Static<typeof Lng>; // = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
// export type LngShort = Static<typeof LngShort>;

// Extract enumerated literal values
// export const lngs: Lng[] = Lng.alternatives.map(lit => lit.value);
// export const shortLngs: LngShort[] = LngShort.alternatives.map(
//   lit => lit.value
// );

export const lngs = Lng.alternatives.map((lit) => lit.value);
export const shortLngs = LngShort.alternatives.map((lit) => lit.value);
