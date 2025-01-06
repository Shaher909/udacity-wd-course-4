# Instructions

## Project Goal:

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

An external API would be used to classify content into subjective or objective.

### The learnings of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

## Prerequisites

- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API - Aylien

## Installation Steps

- Install dependencies (`npm install`) - OK
- Follow the steps from the course up to Lesson 4
  -- verify webpack config files have module exports - OK
  -- verfiy webpack config files have entry points - OK
  -- Install babel & create ` .babelrc`- OK
  ```
  npm i -D @babel/core @babel/preset-env babel-loader
  ```
  -- Install the HTML plugin -OK
  ```
  npm i -D html-webpack-plugin
  ```
  -- install the clean webpack plugin -OK
  ```
  npm i -D clean-webpack-plugin
  ```
  -- rename all `.css` to `.scss` - OK
  -- Install the sass loaders - OK
  ```
  npm i -D style-loader node-sass css-loader sass-loader
  ```
  -- Import the scss files like this in `client/index.js` - OK

## Project fulfillemnt steps:

- Sign up for an API key - OK
- API calls should happen on server side (keys not on client side)
- Install SDK: https://docs.aylien.com/newsapi/v6/getting-started/#overview -> https://docs.aylien.com/newsapi/v5/sdks/#javascript-node-js-sdk -OK
- Use the API - OK
- Install Jest - OK
