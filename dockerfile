FROM node:14.21.0-slim
WORKDIR /app/
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]