# Kongkong Dog Rescue Website CMS

This is the back-end for the Kongkong Dog Rescue. Strapi is being used as a CMS to allow easy modification of the site content.

## Project Status

The site is currently in development. Currently, any updates to the data in Strapi will automatically start a build of the front-end. Any media uploads are stored on Cloudinary to preserve them when inactivity prompts Heroku to move the site out of memory.

## Setup

Clone the repository.

Ensure npm is installed globally.

Install node modules with:

`npm install`

Start the dev server with:

`npm run develop`

Visit the CMS at:

`localhost:1337/admin`
