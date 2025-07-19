FROM node:20

ENV NODE_ENV=development

WORKDIR /var/www/app/web

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host", "--port", "8080"]
