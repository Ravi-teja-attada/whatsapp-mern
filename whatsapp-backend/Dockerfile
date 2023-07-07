FROM node:14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV MONGO_URI=mongodb://db:27017/whatsapp-db

EXPOSE 5000

CMD ["npm", "start"]