FROM node:20-alpine

WORKDIR /app

##local copy
##COPY package*.json .

#Azure copy
COPY package*.json ./

RUN npm install

COPY . .

##RUN npm start

EXPOSE 3000

CMD ["npm", "start"]
