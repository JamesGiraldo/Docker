# Dependencias de desarrollo
FROM node:19.2-alpine3.16 as dependencias
# cd app
WORKDIR /app
# Dest /app
COPY package.json ./
# Instalar dependencias
RUN npm install

# Build y test
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=dependencias /app/node_modules ./node_modules
COPY . .
RUN  npm run test

# Dependencias de prod
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Ejecutar la App
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
# Comando run de la imagen
CMD [ "node", "app.js" ]