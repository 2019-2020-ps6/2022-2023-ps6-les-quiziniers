FROM node:16.20-alpine3.17 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN chown -R node:node /app && su node -c "npm install"
USER node
COPY . .
RUN npm run build:production

FROM nginx:1.24.0 AS production-stage
COPY --from=build-stage /app/dist/starter-quiz-two/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
