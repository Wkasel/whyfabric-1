const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({ public: ['API_URL', 'API_KEY'] });
const withImages = require('next-images');

const nextConfig = {
  // analyzeServer: "server",
  // bundleAnalyzerConfig: {
  //   server: {
  //     analyzerMode: "static",
  //     reportFilename: "./bundles/server.html"
  //   },
  //   browser: {
  //     analyzerMode: "static",
  //     reportFilename: "./bundles/client.html"
  //   }
  // },
  webpack: (config) => {
    // config.module.rules.push({
    //     test: /\.svg$/,
    //     include: [require("path").resolve(__dirname, "/")],
    // });
    config.module.rules.push({
      test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    ['.ts', '.tsx', '.js', '.jsx'].map((ex) =>
      config.resolve.extensions.push(ex)
    );
    config.resolve.modules.push(__dirname);
    return config;
  },
  typescript: {
    ignoreDevErrors: false,
    ignoreBuildErrors: false,
  },
  devIndicators: {
    autoPrerender: false,
  },
  ForkTsCheckerWebpackPlugin: false,
};

module.exports = withImages(
  withConfig(
    withPlugins(
      [
        [withCSS],
        [
          withSass,
          {
            cssModules: true,
            cssLoaderOptions: {
              importLoaders: 1,
              localIdentName: '[folder]__[name]__[local]___[hash:base64:5]',
            },
            sassLoaderOptions: {
              includePaths: ['styles'],
              data: "@import 'utils';",
            },
          },
        ],
        // [withBundleAnalyzer]
      ],
      nextConfig
    )
  )
);
