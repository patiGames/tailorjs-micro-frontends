FROM node:latest

WORKDIR /app

COPY . .
RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "start"]