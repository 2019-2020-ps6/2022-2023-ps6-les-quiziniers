FROM node:16.20-alpine3.17 AS build-stage

WORKDIR /app
COPY package*.json ./
RUN chown -R node:node /app && su node -c "npm install"
RUN npm ci --omit=dev
USER node
COPY . .
FROM node:16.20-alpine3.17 AS production-stage

USER node
WORKDIR /app
COPY --from=build-stage /app /app
COPY --from=build-stage /app/node_modules /app/node_modules
EXPOSE 9428
CMD ["npm", "start"]