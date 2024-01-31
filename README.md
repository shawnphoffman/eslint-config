# @shawnphoffman/eslint-config

ESLint shared config for all of my projects.

This is meant to be used alongside my [Prettier config](https://github.com/shawnphoffman/prettier-config).

## Setup

1. Remove existing `.eslintrc.*` or other [ESLint config files](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) if present.
1. Create (or add to) an `.npmrc` file the following content:
   ```
   @shawnphoffman:registry=https://npm.pkg.github.com
   ```
1. Install `eslint` and this config directly from Github.

   ```
   yarn add -D eslint @shawnphoffman/eslint-config
   ```

1. Add the following to `package.json`:

   ```
   "eslintConfig": {
       "extends": "@shawnphoffman/eslint-config"
   }
   ```

1. Or, add this to your `.eslintrc.js`
   ```
   extends: '@shawnphoffman/eslint-config'
   ```

## Usage with Prettier

1. Set up Prettier and my [shared Prettier config](https://github.com/shawnphoffman/prettier-config).
1. Set up ESLint and my [shared ESLint config](https://github.com/shawnphoffman/eslint-config).
1. When using with Prettier, ESLint should run first. Set up your scripts in `package.json` like this:

   ```json
     "scripts": {
   	"lint": "eslint --ignore-path .gitignore . && prettier --check {,*/**/}*.{js,css,json,md}",
   	"format": "eslint --ignore-path .gitignore . --fix && prettier --write {,*/**/}*.{js,css,json,md}",
     }
   ```

1. Then use the following commands:
   - `npm run lint` to view ESLint and Prettier errors and warnings.
   - `npm run format` to attempt to autofix and autoformat code.

## Development

1. Clone repo and run `yarn install`
1. Edit rules in [.eslintrc.js](.eslintrc.js).
1. Bump version number in [package.json](package.json).
1. Push.
1. The [npm-publish-github-packages.yml](.github/workflows/npm-publish-github-packages.yml) workflow will automatically publish a new version.
