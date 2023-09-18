FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install -g npm@10.1.0
RUN npm install --save-dev esbuild@latest
RUN npm install
COPY . /usr/src/app/
EXPOSE 8000
CMD [ "npm", "run", "dev" ]
