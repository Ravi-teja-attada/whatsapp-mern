FROM node:14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV MONGO_URI='mongodb+srv://Ravi1234:<password>@cluster0.4skmkwf.mongodb.net/?retryWrites=true&w=majority'

EXPOSE 5000

CMD ["npm", "start"]
