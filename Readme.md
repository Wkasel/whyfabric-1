# Getting Started with WhyFabric

# Folder Structure

```
- /
    - /Application
        - /packages
            - documentation
            - legacy-api-server
            - shared
            - services
            - webapp
    - /config
    - /deploy
    - Readme.md
    - Notes.md

```

# Components

- WebApp (next.js)
- Standalone Graph UI
- API (being rewritten to Amplify/Appsync (graphql))
- GraphViz Microservices

* The graphviz microservice is a REST endpoint that accepts a [base64 encoded](https://www.base64encode.org/) version of a [dot notation ](<https://en.wikipedia.org/wiki/DOT_(graph_description_language)>) graph. For more info on the concepts see [./Notes.md](./Notes.md)

# Local Development

Prerequisites:

- Docker
- Kubernetes
- Node v14
