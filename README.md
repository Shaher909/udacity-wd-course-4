# Readme

## Setup

1- Installation, run:

```
npm install
```

2- To verify your setup is complete and correct:

-- Run: `npm run build-dev` and you should be able to access the client via: http://localhost:3000/ (configured via webpack config)

-- Run: `npm run build-prod` and `dist`folder should be created (you can delete the existing one of course beforehand)

-- Run: `npm run start` and you should be able to access the server at: http://localhost:8000/

## Features:

- A form that fetches stories from Alyien API based on specific keywords in the title
- You can specify fetching more than one article (up to 6)
- Each article conatains a link to the source website on the internet
- It's possible to request articles in 3 languages English, French and Spanish
- Layout is mobile-friendly by using media queries for different screen sizes

Note: no text analysis feature was introduced as this feature seems of Text Analysis seems to be deprecated, see: https://aylien.com/blog/adieu-text-analysis-api

## Architecture

- API secrets are stored in `.env`local file.
- Communication with aylien API happens on server side (via SDK approach)
- jsdom package is installed and used in order to test DOM related interactions via jest

## Testing

To run automated tests:

```
npm run test
```

NOTE: Please ensure that the express server (on port 8000) is not running in parallel to the auotmated tests, otherwise there might be conflict.
