import { gql } from 'apollo-server';

import { Fabric } from './Fabric';

// TODO: [WHYF-115] Write unit coverage tests for Fabric library
export const routes = {
  get: [
    {
      path: '/',
      func: (req, res) => res.send({ status: 'alive' })
    }
  ],
  post: [
    {
      path: '/fabric',
      func: async (req, res) => {
        const { theory, options } = req.body;
        const fabric = new Fabric(theory, { rankSegments: options?.segments });
        try {
          const json = await fabric.init();
          res.status(200).send(json);
        } catch (e) {
          const error = { error: e, status: 'error' };
          console.warn(error);
          res.status(500).send(error);
        }
      }
    }
  ]
};

export const graphServiceSchema = {
  typeDefs: {
    QUERY: gql`
      type Query {
        hello: String
      }
    `
  },
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
};

export default Fabric;
