# Coding Challenge - Michael Brecht

[**This site is currently live**](http://spectrumcodingchallenge-env.eba-ydm3ycdp.us-west-2.elasticbeanstalk.com/)

## Running the app

`npm start` will install all dependencies, build the production bundle file, and start a server on port 3000 or whatever `process.env.PORT` is set to.

`npm build-dev` will build the bunlde file in development mode with the watch flag enabled.

`npm start-dev` will run a server using nodemon in order to restart upon any updates to the code.

## About this app

This app grabs a list of restaurants from the provided API, displays them in a table in alphabetical order, and gives users the ability to filter by two conditions and search by name, genre, and city.

The app is [currently deployed](http://spectrumcodingchallenge-env.eba-ydm3ycdp.us-west-2.elasticbeanstalk.com/) to an AWS EC2 instance, and continuous delivery is done through a combination of GitHub Actions, AWS CodePipeline, and a start script in the app itself. Once a push is made to the master branch, this process begins and automatically deploys the site to the live server.

Continuous Integration is performed using GitHub Actions and a Jest/Enzyme testing suite. On a pull request to the master branch, the test suite runs, and must pass in order to push to the master branch. This prevents app-breaking code from being pushed to the live site.

## Technologies used

- **Front End**
  - React
  - [Styled Components](https://styled-components.com/)

- **Back End**
  - Node
  - Express
  - Webpack
  - Babel

- **Testing**
  - Jest
  - Enzyme

- **CI/CD**
  - GitHub Actions
  - AWS CodePipeline
  - AWS EC2
  - AWS ElasticBeanstalk
  