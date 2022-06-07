FROM node:16

COPY ["package-lock.json", "package.json", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

COPY [".", "/usr/src"]

EXPOSE 8000

CMD ["npm", "run", "dev"]