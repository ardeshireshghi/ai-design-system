
      const path = require('path');
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

      module.exports = async ({config}) => {
      // Ensure plugins array exists
      if (!config.plugins) {
          config.plugins = [];
      }

      // Add Babel loader for .js, .jsx, .ts, and .tsx files
      config.module.rules.push({
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
          }
      });

      // Ensure the resolve.extensions includes .ts and .tsx
      config.resolve.extensions.push('.ts', '.tsx');

      // Add ForkTsCheckerWebpackPlugin to the plugins
      config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
          async: false, // Optional: Set to false to run checks synchronously
          typescript: {
              configFile: path.resolve(__dirname, '../tsconfig.json') // Ensure the correct path to your tsconfig.json
          }
          })
      );

      return config;
      };
    