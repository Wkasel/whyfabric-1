import useAccessControl from "./useAccessControl";
import useAuthStrategy from "./useAuthStrategy";
import useAppConfig from "./useAppConfig";

export default { useAccessControl, useAuthStrategy, useAppConfig };
// keystone.extendGraphQLSchema({
//   types: [{ type: "type FooBar { foo: Int, bar: Float }" }],
//   queries: [
//     {
//       schema: "double(x: Int): Int",
//       resolver: (_, { x }) => 2 * x
//     }
//   ],
//   mutations: [
//     {
//       schema: "double(x: Int): Int",
//       resolver: (_, { x }) => 2 * x
//     }
//   ]
// });
