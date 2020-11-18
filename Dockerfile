FROM node:lts-alpine3.9

# 在容器中创建一个目录
RUN mkdir -p /usr/src/bfcAuthCenter/

WORKDIR /usr/src/bfcAuthCenter/

COPY . /usr/src/bfcAuthCenter/

RUN npm install

EXPOSE 3100

CMD npm run start
