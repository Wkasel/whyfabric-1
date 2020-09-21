# WhyFabric

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](link to site)

WhyFabric mono-repo

## Launching the Dev Environment

1.  `docker-compose up`
2.  go to `http://localhost:3000/theories/theory/brexit-theory-by-william-kasel/5dd6e80515ea6d83ed92172c` to demo a theory

_NOTE: All packages prefixed with `@whyfabric`, such as `@whyfabric/ui`._

```
├── scripts
├── packages
| └── apps (anything thats an app)
|   └── admin-client (react admin client)
|   └── api-server (express api server)
|   └── www (next-js / react consumer web app)
| └── common (shared stuff here)
|   └── js-api-wrapper (wrapper to the admin & consumer apis)
|   └── models (models & schemas)
|   └── ui (Shared react components here)
| └── services
|   └── file-service (s3 file upload service)
|   └── graph-service (graph layout engine, and static rendering)
|   └── mailer-service (mail send service)
| └── examples
|   └── kitchen-sink (all client-side demos, sandbox, workspace...)
```

## Tools

_package tools_

- [lerna](https://lerna.js.org/)
- [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

_build tools_

- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)

_config tools_

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [style-lint](https://stylelint.io/)

_devops tools_

- [serverless](http://serverless.com)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

_design system tools_

- [bit.dev](http://bit.dev)
- [Styled-Components](http;//styled-components.com)

_general tech_

- [next.js](https://nextjs.org/)
- [react](https://reactjs.org/)
- [express](https://expressjs.com/)
- [mongoose](http://mongoosejs.com)
- [Mongo Atlas](https://mongodb.com)
