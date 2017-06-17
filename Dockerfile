FROM node:onbuild
RUN mkdir /code
WORKDIR /code
#ADD package.json /code/
#RUN npm install
ADD . /code/
EXPOSE 8080
