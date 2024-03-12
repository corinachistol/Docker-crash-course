# Basically , each command in this file is a layer
# Each time we add a new command, we add a new layer and it takes some time to compose the image

# parent image as the first layer
FROM node:16-alpine

RUN npm install -g nodemon

# working directory of the image, as image has its own structure directory
WORKDIR /app 

# copy this file and place it in the workdir
COPY package.json .

# install dependancies at build time
RUN npm install

# copy everything from this folder and paste it in the workdir, as relative path
COPY . .

# on what port will run the dcoker container , optional
EXPOSE 4000

# agter the image build the container , we run the command
CMD ["npm", "run", "dev"]

# final step is to build the image
# docker build -t name .