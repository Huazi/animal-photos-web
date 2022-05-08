# How to run the project:

## run the app on Docker compose
Execute the command: docker-compose up
Please be note, if this docker image has never been started in your docker. The ORM Sequelize normally has a connection issue to the DB. The reason of this issue is that the starting of the api server is faster than the DB connection. Please run the "docker-compose down" to stop the docker container. Then, re-execute the start command.

## run the app in docker container
1. run postgresql on Docker
docker run --name postgresqldb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:14.0 -v data/init_db.sql:/docker-entrypoint-initdb.d/init_db.sql

2. run PGAdmin on Docker
docker run --name mypgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=postgres@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=postgres'-d dpage/pgadmin4

3. run app on Docker


# How to debug projects:

1. Navigate to the client folder:
   Executing the "npm start" can debug the React project
   Executing the "npm test" can execute all the unit test
2. 'npm run dev' can use to debug the restful api.

# log history:

1. inital commit

## Requirements

**Core Application**

The Express server, besides delivering whats required for React, should also provide an API endpoint that will return lists of photo URLs that are retrieved from a database. Your React app should make a request to your API endpoint to retrieve a photo list. During this request the React app should show a loading state. Once the photo list has been retrieved the loading state should dismiss and the first photo should be shown. The user should now be able to cycle through the photos using left and right arrow buttons. The user can use the UI to toggle between cat photos, shark photos, or both (when both selected they should arrive in a random order). After each change to the desired list the loading state should be shown just like during the initial load and a new request to the photo API endpoint should be made (i.e. Do not cache the photo lists).

**Administrative Endpoints**

The Express server should also expose a number of administrative endpoints. The primary responsibility of these endpoints is to enable the addition or deletion of additional animal categories. When a category is added or removed, the application should be updated to reflect this (e.g. If the `dog` category is added, the Core Application's UI should display buttons for cats, dogs, and sharks. Categories are shuffled together based on active categories). A UI for the Admin endpoints is NOT requlred (but can be added as a bonus!).

These endpoints should be protected, only allowing requests accompanied by a valid authentication token. The starter code exposes a route, `GET /auth` that will return an auth token. This token should be used to authenticate requests.

### Do

- Be mindful of when to use props vs. state vs. Hooks vs. Context
- Be RESTful
- ES6+
- Use JS best practices
- Be creative

### Don't

- Use a third party library for the carousel (libraries for the minor components can be used to save time)
- Over think the problem, there's no trick here

### BONUS

- Unit tests
- Build an admin page for the administrative API
- Improve security of token generation in `auth.js` or add a login
- Update docker workflow with development and production compose files
- Clean up the app structure
- Other useful features

## Instructions

### Boilerplate rundown

- This assignment uses Docker to help pre-load a database with data. Ensure that your machine can run the docker engine at a minimum. Alternatively, the `/data` folder contains SQL scripts to seed a local Postgres database.
- Create React App is also initialized in the `/client` folder. The CRA build can be statically hosted on the express server.

### Getting started

- Fork or clone this repository.
- Run `docker-compose build` to build your docker environment.
- Use `docker-compose up` to enable your environment. This will start your Express server and a Postgres database. _Note_: If you don't want to constantly rebuild your image, you can run the client and server outside of docker for development.
- The Postgres database will be pre-loaded with two tables. The `animal_categories` table contains a table of animal categories. The `animal_photos` table contains animal photo urls.
- The Photo List below is an example request body to the administrative endpoint - feel free to use it to test adding new animal cantegories.
- Complete the assignment in a separate branch in your version of the repository.

#### Hints

- The on your local environment, the Postgres docker image will be available on port `localhost:5433` with username/password of `postgres/postgres`. Within the docker network, the database is located on `postgres:5432`.
- If you are having trouble setting up the docker environment, feel free to use the scripts to load a local database and develop locally.

### Submission

- Create a PR for `your new branch` -> `master` **in your own repository**
- Do not PR in this repository
- Email hugh.soong@rbc.com with a link to the PR
- If you require other accomodations, please let us know

## Photo Lists

```json
{
  "dogs": [
    "https://founded.media/hiring/photos/dogs/photo-1477884213360-7e9d7dcc1e48.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1534361960057-19889db9621e.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1534551767192-78b8dd45b51b.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1543466835-00a7907e9de1.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1548199973-03cce0bbc87b.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1561037404-61cd46aa615b.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1576201836106-db1758fd1c97.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1581888227599-779811939961.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1583511655857-d19b40a7a54e.jpeg",
    "https://founded.media/hiring/photos/dogs/photo-1587300003388-59208cc962cb.jpeg"
  ],
  "dinosaurs": [
    "https://founded.media/hiring/photos/dinosaurs/photo-1519568262558-dc4b87dd85ca.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1525877442103-5ddb2089b2bb.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1559999127-b8b7f927dab8.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1560148271-00b5e5850812.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1568887786489-0662e7f51aab.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1570482606740-a0b0baa0e58d.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1579197073550-bf44b469a6fe.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1583307359900-dbefeb18e3cc.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1583307709855-88a955597645.jpeg",
    "https://founded.media/hiring/photos/dinosaurs/photo-1606856110002-d0991ce78250.jpeg"
  ]
}
```
