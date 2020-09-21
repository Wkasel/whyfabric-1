const terminalLink = require("terminal-link");
const express = require("express");
const endent = require("endent");
const ciInfo = require("ci-info");
const chalk = require("chalk");
const path = require("path");

const { DEFAULT_ENTRY, DEFAULT_PORT } = require("./constants");

const ttyLink = (text, path, port) => {
  if (ciInfo.isCI) {
    return;
  }
  const url = `http://localhost:${port}${path}`;
  const link = terminalLink(url, url, { fallback: () => url });
  console.log(`🔗 ${chalk.green(text)}\t${link}`);
};

function getEntryFileFullPath(args, { exeName, _cwd }) {
  const entryFile = args["--entry"] ? args["--entry"] : DEFAULT_ENTRY;
  try {
    return Promise.resolve(require.resolve(path.resolve(_cwd, entryFile)));
  } catch (error) {
    return Promise.reject(
      new Error(endent`
        --entry=${entryFile} was passed to ${exeName}, but '${entryFile}' couldn't be found in ${process.cwd()}.
        Ensure you're running ${exeName} from within the root directory of the project.
      `)
    );
  }
}

function extractAppMeta(apps, dev) {
  let adminPath;
  let graphiqlPath;
  let apiPath;

  apps.forEach((app) => {
    switch (app.constructor.name) {
      case "AdminUIApp": {
        adminPath = app.adminPath;
        break;
      }
      case "GraphQLApp": {
        apiPath = app._apiPath;
        graphiqlPath = dev ? app._graphiqlPath : undefined;
        break;
      }
    }
  });

  return {
    adminPath,
    graphiqlPath,
    apiPath,
  };
}

const listen = async () =>
  new Promise((resolve, reject) => {
    //   spinner.succeed(`Keystone server listening on port ${port}`);
    //   spinner.text = "Initialising Keystone instance";
    //   status = "init-keystone";
    //   // Allow the spinner time to flush its output to the console.
    //   await new Promise((resolve) => setTimeout(resolve, 100));
    //   spinner.succeed("Initialised Keystone instance");
    //   spinner.start("Connecting to database");
    //   status = "db-connect";
    //   if (!dev) server = await listen();
    //   status = "started";
    //   spinner.succeed(
    //     chalk.green.bold(
    //       `Keystone instance is ready at http://localhost:${port} 🚀`
    //     )
    //   );
    //   const { adminPath, graphiqlPath, apiPath } = extractAppMeta(apps, dev);
    //   return { port, server };
  });

module.exports = {
  listen,
};
