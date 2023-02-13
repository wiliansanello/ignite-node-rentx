FROM node

WORKDIR /home/wansanello/vscode-projects

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]
