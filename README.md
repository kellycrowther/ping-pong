## Ping Pong Application

### How to Start the Application

1. Navigate to the backend directory and run `npm install`
2. Once installation is complete, run `npm run start` to start the backend
3. In a new terminal window, navigate to the frontends/app directory and run `npm install`
4. Once installation is complete, run `npm run start` to start the frontend app
5. Go to `http://localhost:3000` in the browser to start using the app

## About the project

### The backend

- The backend is built using the Model View Controller Service architecture pattern
- Express server
- Sqlite3 database
- A match is the primary data model containing the results of the games the players played

### The frontend

- The frontend is built with React and Redux using the Container & Presentational Component pattern
- Redux actions, epics, selectors, and reducers can be found in the `core` folder
- Antd is the component library
- The home page has the ranked results of players and the results page shows the individual matches and the corresponding results.

## Areas for Improvement

1. Validation for the Save Results form

- Should add a game column, instead of adding each game for each player individually
- A game only counts as a win if you get 11 points, but nothing requires one of the points fields of a game to have 11 points

2. Ranked players are ranked by the number of games won. It should probably rank by matches won, then games won, then points against
3. User should be able to create a user from the Save Results form or the Results Page
4. More tests
5. Define more types throughout
