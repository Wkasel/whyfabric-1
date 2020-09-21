// // Import our interfaces
// import {
//   PageStateDef,
//   PageAllStatesDef,
//   PageDef
// } from "./typescript/siteMetadata";
//  {
//   // Helper functions
//   const factories = {
//     makeTitle: (tmpl: string): string => `${common.site.title} - ${tmpl}`
//   };

//   // Common Data
//   const common = {
//     site: {
//       title: "WhyFabric",
//       description: "The Why Behind the Why"
//     }
//   };

//   // currently having issues with nested objects, so not applying any of the above interfaces. Will revisit.

//   // Page Data
//   const pages = {
//     home: {
//       states: [
//         {
//           state: "default",
//           auth: false,
//           title: () => `Home`,
//           url: "/"
//         }
//       ]
//     },
//     search: {
//       states: [
//         {
//           state: "default",
//           auth: false,
//           title: (term: string): string => `Search Results for ${term}`,
//           url: (term: string): string => `/search/${term}`
//         }
//       ]
//     },
//     login: {
//       states: [
//         {
//           state: "default",
//           title: "Login",
//           url: "/login"
//         }
//       ]
//     },
//     register: {
//       states: [
//         {
//           state: "default",
//           title: "Login",
//           url: "/register"
//         }
//       ]
//     },
//     authors: {
//       states: [
//         {
//           state: "default",
//           title: "Become an author",
//           url: "/authors"
//         },
//         {
//           state: "register",
//           title: "Author",
//           url: "/authors/register" // maybe /admin/register?
//         }
//       ]
//     },
//     glossary: {
//       states: [
//         {
//           state: "default",
//           title: "Glossary"
//         }
//       ]
//     },
//     profile: {
//       states: [
//         {
//           state: "default",
//           auth: false,
//           title: (username: string): string => `${username}'s profile`,
//           url: (username: string): string => `users/${username}`
//         }
//       ]
//     },
//     me: {
//       states: [
//         {
//           state: "authenticated",
//           title: () => `My Profile`,
//           url: () => `/me`,
//           auth: true,
//           action: {
//             do: "redirect",
//             to: "login"
//           }
//         }
//       ]
//     },
//     theories: {
//       states: [
//         {
//           state: "default",
//           auth: false,
//           title: () => `Browse Theories`,
//           url: () => `/theories/browse/all`
//         }
//       ]
//     },
//     theoryCategories: {
//       states: [
//         {
//           state: "default",
//           auth: false,
//           title: () => `Theory Categories`,
//           url: () => `/theories/categories`
//         }
//       ]
//     },
//     // theoryCategory: {
//     //   states: [
//     //     {
//     //       state: "default",
//     //       auth: false,
//     //       title: (category: string): string => `${category} theory`
//     //     }
//     //   ]
//     // },
//     organization: {
//       states: [
//         {
//           title: (org: string): string => `${org} organization theories`,
//           url: (org: string): string => `orgs/${org}`
//         }
//       ]
//     },
//     adminDashboard: {
//       states: [
//         {
//           state: "authenticated",
//           auth: true,
//           role: ["sme", "admin"],
//           title: () => `SME Dashboard`,
//           url: () => `/admin`
//         },
//         {
//           state: "default",
//           auth: true,
//           action: {
//             do: "redirect",
//             to: "login"
//           }
//         }
//       ]
//     },
//     newTheory: {
//       states: [
//         // step 0 - create or modify theory
//         {
//           state: {
//             type: "stepper",
//             name: "step-0-[create or modify theory]",
//             data: [
//               {
//                 key: "step",
//                 value: 0
//               }
//             ]
//           },
//           title: (): string => `Create a new Theory`,
//           url: (): string => `/admin/theory/new`
//         } as PageStateDef,

//         // step 1 - Add Theory Description
//         {
//           state: {
//             type: "stepper",
//             name: "step-1-[add theory description]",
//             data: [
//               {
//                 key: "step",
//                 value: 1
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - edit Description`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_1`
//         } as PageStateDef,

//         // step 2 - Add Apex Details
//         {
//           state: {
//             type: "stepper",
//             name: "step-2-[add apex details]",
//             data: [
//               {
//                 key: "step",
//                 value: 2
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Apex Details`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_2`
//         } as PageStateDef,

//         // step 3 - Add Nodes
//         {
//           state: {
//             type: "stepper",
//             name: "step-3-[add Nodes]",
//             data: [
//               {
//                 key: "step",
//                 value: 3
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Add Nodes`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_3`,
//           notes: "Add nodes here, also sync nodes here"
//         } as PageStateDef,

//         // step 4 - Connect Nodes
//         {
//           state: {
//             type: "stepper",
//             name: "step-4-[connect nodes]",
//             data: [
//               {
//                 key: "step",
//                 value: 4
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Connect Nodes`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_4`,
//           notes: "This page displays the graph in edit mode"
//         } as PageStateDef,

//         // step 5 - Justify Connections
//         {
//           state: {
//             type: "stepper",
//             name: "step-5-[Justify connections]",
//             data: [
//               {
//                 key: "step",
//                 value: 5
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Justify Connections`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_5`,
//           notes: ""
//         } as PageStateDef,

//         // step 6 - Justify Connections
//         {
//           state: {
//             type: "stepper",
//             name: "step-6-[Select Abstract Nodes]",
//             data: [
//               {
//                 key: "step",
//                 value: 5
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Select Abstract Nodes`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_6`,
//           notes:
//             "Back to graph render here -- select abstract nodes in graph ui"
//         } as PageStateDef,

//         // step 7 - Finalize
//         {
//           state: {
//             type: "stepper",
//             name: "step-7-[Finalize Theory]",
//             data: [
//               {
//                 key: "step",
//                 value: 5
//               }
//             ]
//           },
//           title: (name: string): string => `${name} - Finalize Theory`,
//           url: (id: string): string => `/admin/theory/${id}/edit/step_7`,
//           notes: "Display option to share with college, or publish."
//         } as PageStateDef
//       ]
//     }
//   };

//   // can now be inferred from above
//   // const structure = {
//   //   "/": {
//   //     page: pages.home,
//   //     routes: {
//   //       "/profile": {}
//   //     }
//   //   },
//   //   "/admin": {
//   //     page: pages.adminDashboard,
//   //     routes: {
//   //       "/theory/new": {
//   //         page: pages.newTheory
//   //       }
//   //     }
//   //   }
//   // };

//   // blog post: https://codewithstyle.info/Deep-property-access-in-TypeScript/
//   // original post: https://www.reddit.com/r/typescript/comments/aynx0o/safe_deep_property_access_in_typescript/ei65qw6/?context=3
//   // Don't know a good name for this type.
//   // It's used to include `| undefined` in the return type if a property upstream of
//   // the end of the chain is possibly `null` or `undefined`.
//   //
//   // Even more robust implementation (if needed)
//   // https://gist.github.com/regevbr/57f3b4d798fb4642eb4a1c6ed667320d
//   //
//   //
//   type MaybeUndefined<T> = T extends null | undefined ? undefined : never;

//   function get<T, K1 extends keyof NonNullable<T>>(
//     obj: T,
//     k1: K1
//   ): NonNullable<T>[K1] | MaybeUndefined<T>;
//   function get<
//     T,
//     K1 extends keyof NonNullable<T>,
//     K2 extends keyof NonNullable<NonNullable<T>[K1]>
//   >(
//     obj: T,
//     k1: K1,
//     k2: K2
//   ):
//     | NonNullable<NonNullable<T>[K1]>[K2]
//     | MaybeUndefined<T>
//     | MaybeUndefined<NonNullable<T>[K1]>;
//   function get<
//     T,
//     K1 extends keyof NonNullable<T>,
//     K2 extends keyof NonNullable<NonNullable<T>[K1]>,
//     K3 extends keyof NonNullable<NonNullable<NonNullable<T>[K1]>[K2]>
//   >(
//     obj: T,
//     k1: K1,
//     k2: K2,
//     k3: K3
//   ):
//     | NonNullable<NonNullable<NonNullable<T>[K1]>[K2]>[K3]
//     | MaybeUndefined<T>
//     | MaybeUndefined<NonNullable<T>[K1]>
//     | MaybeUndefined<NonNullable<NonNullable<T>[K1]>[K2]>;
//   function get(obj: any, ...keys: string[]): any {
//     return keys.reduce(
//       (result, key) => (result == null ? undefined : result[key]),
//       obj
//     );
//   }
