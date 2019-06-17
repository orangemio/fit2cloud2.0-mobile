FROM node:latest

WORKDIR /app

COPY . /app

RUN cd /app && npm install 

EXPOSE 8080

CMD ["npm", "start"]