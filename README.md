# Typescript + Express + Docker

## How to run

### Using node

#### Requirements

- Node LTS

### NPM scripts

- __build__: Build app, the output will be __/dist__
- __start__: Run app without compilation process.
- __dev__: Run app with hot-reload.
- __lint and lint:fix__: Execute linter, use fix to automatically fix the errors found.
- __test__: Run all tests.
- __test:e2e:report:serve__: Run acceptance tests and open a webpage with the results.

### Using Docker

#### Requirements

- Docker
- Docker compose
- Make

### Makefile

- __make run-local__: Launch dev containers
- __make stop-local__: Stop dev containers
- __make down-local__: Remove dev containers and local images
- __make run-tests__: Launch containers for all tests
- __make run-e2e-tests__: Launch e2e tests containers
- __make run-serve-e2e-tests__: Launch e2e tests containers and a webpage with the results.
- __make down-tests__: Remove test containers and local images.