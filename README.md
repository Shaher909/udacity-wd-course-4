# Readme

## Setup

1- Follow the **Installation Steps** in the `instruction.md`file.
2- To verify your setup is complete and correct
Run: `npm run build-dev` and you should be able to access the client via: http://localhost:3000/ (configured via webpack config)
Run: `npm run build-prod` and `dist`folder should be created
Run: `npm run start` and you should be able to access the server at: http://localhost:8000/

## Features:

- A form that fetches stories from Alyien API based on specific keywords in the title
- You can specify fetching more than one article (up to 6)
- Each article conatains a link to the source website on the internet
- It's possible to request articles in 3 languages English, French and Spanish

Note: no text analysis feature was introduced as this feature seems of Text Analysis seems to be deprecated, see: https://aylien.com/blog/adieu-text-analysis-api
