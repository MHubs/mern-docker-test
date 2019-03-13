FROM node:10.15.3
# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV NODE_PATH=/node_modules
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
#COPY package*.json ./
COPY package.json .

RUN npm install
#&& npm install react-scripts@1.1.1 -g --silent && npm install bootstrap --save && npm install --save reactstrap react react-dom && npm install mongodb@3.1.13 && npm install --save axios && npm i -S mongoose express body-parser morgan && npm install concurrently && npm install cors
  # && \
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]

