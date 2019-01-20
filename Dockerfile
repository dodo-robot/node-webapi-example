FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

COPY dist/ /app/src

RUN ls 

EXPOSE 8080

CMD ["node", "src/index.js"]
 