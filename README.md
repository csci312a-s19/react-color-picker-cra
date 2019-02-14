This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and all of the key CRA commands, e.g. `npm start` and `npm test` are available. For simplicity we removed some features, namely service workers.

We further installed the [prop-types](https://www.npmjs.com/package/prop-types) as an explicit dependency.

```
npm install --save prop-types
```

For styling we use [Styled Components](https://styled-components.com), installed via

```
npm install --save styled-components
```

## Testing

The included tests use both Jest and Enzyme as described in the [CRA documentation](https://facebook.github.io/create-react-app/docs/running-tests).

Enzyme was installed with:

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

and we further installed the `jest-enzyme` and `jest-styled-components` matchers to help us write tests more concisely:

```
npm install --save-dev jest-enzyme jest-styled-components
```

and created the `src/setupTests.js` file as specified in the documentation.

## Linting and Formatting

We utilize the ESLint configuration built into CRA (which is more permissive than the AirBnB configuration). The linter is run automatically by the CRA development server, or can be run manually with `npm run lint`.

The AirBnB rules do not integrate smoothly with the current version of CRA. Thus we have added our own rules to `.eslintrc.json`. Thus you will get a different, and more expansive set of warnings and errors, when you run `npm run lint` than with the output provided by the CRA development server.

To ensure consistent style we use the CRA-recommended [Prettier](https://github.com/prettier/prettier) package. We installed it with

```
npm install --save-dev husky lint-staged prettier
```

and added the recommended configuration to automatically reformat code during the commit. That is whenever you commit your code, Prettier will automatically reformat your code during the commit process (as a "hook").