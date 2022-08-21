# Podcast iTunes App

Simple one-page application based in ReactJs with redux-toolkit to explore Podcast from the iTunes Api.
Using Tailwind CSS to style the site.
Simple Cypress test to ensure the correct loading of complete app.
To avoid CORS when fectching data I've used [https://corsproxy.io/?](https://corsproxy.io/?) whit others iTunes doesn't return the full data.
To store data for a period of time and avoid request without changes the webapp uses redux-persist

## How install and Run

In the project directory, you can run:

### `npm install`

After download the code be sure to run this command, to install all the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm cypress:open`

Launches the test runner of cypress for the test file.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## How to use it

When you load the site for first time, your are going to get a grid with all the podcast avaible, a total of 100, using the filter input you can search by author or name, getting aa filterd list in time.

Once you choose your desire podcast, simple, click it and you'll get extra info about it, and a list of all the episodes avaiable including the release date and the duration.

So if you want listen one, just choose, click and you'll see the episode info and a player... so you only need to click play.