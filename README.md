## Project Skeleton

```
Movie App 
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    │     └── VideoSection.js
│    ├── context
│    │     └── AuthContext.js
│    ├── helpers
│    │     └── ToastNotify.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── AppRouter.js
│    │     └── PrivateRouter.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env

```


Open https://movie-app-firebase-project.herokuapp.com/

## Expected Outcome

![Project Movie_app Snapshot](movie-app.gif)

## Steps to Solution

- Step 1 : Create React App using `npx create-react-app movie-app`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.

- Step 4 : Signup `https://www.themoviedb.org/documentation/api` and get API key for getting data from `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, for searching movies `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and for movie details `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`.

- Step 5: You can use css frameworks like Bootstrap, Semantic UI, Material UI.

- Step 6: Add project gif to your project and README.md file.

