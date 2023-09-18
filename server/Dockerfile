FROM node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/
RUN npm install -g npm@10.1.0
RUN npm install -g concurrently typescript
RUN npm install
COPY . /usr/src/app/
EXPOSE 5500
CMD [ "npm", "run", "dev" ]
