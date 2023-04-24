# SPA Accredify

This is a single page application (SPA) built with Vue 3 and TypeScript where users can view their documents on the home page. Managed users are able to see an additional "Career Goal" section on the home page.

## Project Setup

1. Clone this repository: `git clone https://github.com/skerschhackl/spa_accredify.git`
2. Navigate to the project directory: `cd <your-repo-name>`
3. Install dependencies: `npm install`

### Compile and Hot-Reload for Development

To start the development server, you can run the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:3000`, and it will watch for changes in the `src` folder and trigger a rebuild automatically.

### Type-Check, Compile and Minify for Production

To build the project for production, you can run the following command:

```sh
npm run build
```

This will compile the TypeScript code, bundle the JavaScript and CSS files, and generate the static files in the `dist` folder.

### Testing

This project comes with pre-configured unit and end-to-end testing environments. You can run the unit tests with the following command:

#### Run Unit Tests with [Vitest](https://vitest.dev/)

You can run the unit tests with the following command:

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

You can run the end-to-end tests with the following commands in two separate terminal windows:

```sh
npm run dev
```

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

You can run the end-to-end tests with the following commands:

```sh
npm run build
npm run preview
```

```sh
npm run test:e2e
```

### Linting with [ESLint](https://eslint.org/)

This project uses ESLint to enforce a consistent code style. You can run the linter with the following command:

```sh
npm run lint
```
