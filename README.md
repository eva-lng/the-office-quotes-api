# the office quotes API
The Office Quotes API is an API that generates and serves random quotes from the popular TV show The Office. It allows users to fetch random quotes or quotes from specific characters. A preview is available on the quote generator page.

**Tech used:** HTML, Tailwind CSS, Javascript, Node.js, Express.js

**Link to project:** https://officequotesapi.cyclic.app

## Getting started
1. Install `node` and `cd` to the project folder
2. `npm install`
3. Navigate to browser and go to `http://localhost:8000` to view the homepage

## Usage
Visit the homepage to see the quote generator in action. To learn how to use the API, you can also visit the API documentation at `/docs`.

### Endpoints
**Fetch a random quote from any character**
`GET /api/random`

**Fetch a random quote from a specific character**
`GET /api/random/:char`
Replace `:char` with the character's first name

**Fetch all quotes from a specific character**
`GET /api/all/:char`
Replace `:char` with the character's first name

### Example request


## Optimizations

## Lessons Learned