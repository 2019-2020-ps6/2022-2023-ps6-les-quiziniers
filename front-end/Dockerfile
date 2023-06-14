FROM node:16.20-alpine3.17 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN chown -R node:node /app && su node -c "npm install"

USER node

COPY . .

RUN su node -c "npm run build"

FROM nginx:1.24.0 AS production-stage

COPY --from=build-stage /src /src
COPY --from=build-stage /app/node_modules /app/node_modules


USER node

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
