FROM node:18-alpine as common-build-stage

WORKDIR /app
COPY . .
RUN npm ci

FROM common-build-stage as development-run-stage

ENV NODE_ENV development
CMD ["npm", "run", "dev"]

FROM common-build-stage as tests-run-stage

ENV NODE_ENV development
CMD ["npm", "run", "test"]

FROM common-build-stage as production-build-stage

ENV NODE_ENV production
RUN npm prune
RUN npm run build

FROM node:18-alpine as production-run-stage

ENV NODE_ENV production
USER node
COPY --chown=node --from=production-build-stage ./node_modules ./node_modules
COPY --chown=node --from=production-build-stage ./dist .
CMD ["node", "./src/index.js"]
