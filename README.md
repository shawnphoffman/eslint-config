# eslint-config-shawndev

ESLint shared config for all RouteIf projects.

This is meant to be used alongside Prettier (and the [RouteIf shared config](https://github.com/RouteIf/prettier-config)).

## Setup

Based on [Publishing a Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) from the ESLint documentation. The package is [retrieved from GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

1. Remove existing `.eslintrc.*` or other [ESLint config files](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) if present.
1. Create (or add to) an `.npmrc` file the following content:
    ```
    @routeif:registry=https://npm.pkg.github.com
    ```
1. Install `eslint` and this config directly from Github.

    ```
    npm install -D eslint @routeif/eslint-config-routeif
    OR
    pnpm add -D eslint @routeif/eslint-config-routeif
    ```

1. Add the following to `package.json`:
    ```
    "eslintConfig": {
        "extends": "@routeif/eslint-config-routeif"
    }
    ```

## Usage with Prettier

Based on the [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) guide from Prettier and using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

1. Set up Prettier and the [RouteIf shared config](https://github.com/RouteIf/prettier-config).
1. Set up ESLint and the [RouteIf shared config](https://github.com/RouteIf/eslint-config-routeif).
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

1. Clone repo and run `pnpm install`
1. Edit rules in [.eslintrc.js](.eslintrc.js).
1. Bump version number in [package.json](package.json).
1. Push.
1. The [push.yml](.github/workflows/push.yml) workflow will automatically publish a new version.
