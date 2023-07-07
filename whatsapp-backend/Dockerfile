# Stage 1: Build the application
FROM node:14 as build

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

ENV MONGO_URI=mongodb://root:password@db:27017/my_database

RUN npm run build

# Stage 2: Create the production image
FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY --from=build /app .

ENV MONGO_URI=mongodb://root:password@db:27017/my_database

EXPOSE 5000

CMD ["npm", "start"]