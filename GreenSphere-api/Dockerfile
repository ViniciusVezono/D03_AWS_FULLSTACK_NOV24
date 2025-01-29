FROM node:latest

WORKDIR /GreenSphere-api

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000