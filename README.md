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
* **Fetch a random quote from any character**  
`GET /api/random`

* **Fetch a random quote from a specific character**  
`GET /api/random/:char`
replace `:char` with the character's first name

* **Fetch all quotes from a specific character**  
`GET /api/all/:char`
replace `:char` with the character's first name

### Example request
Fetch a random quote from Phyllis:  
`GET api/random/phyllis`

Response:
```
{
  "id": 18,
  "character": "Phyllis Lapin-Smith",
  "season": 3,
  "episodeNumber": 7,
  "episodeName": "The Merger",
  "text": "You have a lot to learn about this town, sweetie."
}
```

## Optimizations
Future optimizations could include:
* Adding more quotes to the collection
* Allow users to filter quotes by season or episode number for more targeted results
* Improving input validation to handle incorrect requests and error handling
* Caching responses to optimize performance
* Moving the quotes collection to a database for more scalability and easier data management

## Lessons Learned
This project was a great opportunity to solidify my understanding of key backend development concepts as I was learning how to build and deploy APIs. Specifically, I gained experience in:
* **Backend development:** Setting up an API with Node.js and Express including routing, middleware and handling HTTP requests
* **RESTful API design:** Designing clean and organized RESTful API with multiple endpoints, focusing on delivering specific functionality
* **Front-end integration:** Connecting the API to a front-end interface