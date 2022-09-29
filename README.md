# NextJs template

NextJs template owned by [beenjii14](https://github.com/beenjii14)

Structured and configured packages ready to put logic into your project

## Configured packages

- [React](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/guide)
- [Husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/)

## Structure

This is the directory structure of the application.

```text
  ├── __tests__ -> Unit tests
  ├── src -> Codebase
  │   ├── pages
  │   ├── styles
  │   ├── utils
  └── coverage
        ├── lcov-report
```

## Requirements

- [Node](https://nodejs.org/en/) >=16.14.0
- Install PNPM from [here](https://pnpm.io/es/installation)
- Install Git from [here](https://git-scm.com/downloads)
- Have shell or command line (If you use Mac and Linux, you have a terminal pre-installed, if you are using windows you can use [git bash](https://git-scm.com/downloads))

## Development

```bash
# Clone the repo
git clone git clone https://github.com/beenjii14/nextjs-template.git

# Install dependencies
pnpm install

# Run the app
pnpm dev
```

## Production

```bash
# Clone the repo
git clone git clone https://github.com/beenjii14/nextjs-template.git

# Install dependencies
npm install

# Run the app
npm run production:start
```

## Extra commands

Run the unit tests

```bash
# Run the unit tests with coverage
pnpm test

# Run the unit tests watch mode
pnpm test:watch
```

Run the eslint

```bash
pnpm lint
```

## [License MIT](LICENSE)
