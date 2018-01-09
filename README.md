# Checkin

Remote-friendly scrum check-ins without the annoying meetings. Based on an project idea originally proposed by by [Eric Elliot](https://medium.com/@_ericelliott).

I built this purely as a means to try out libraries that interest me and play with things like Webpack, React testing etc etc.
 
Currently this is a *prototype* built as part of a company Hack Day. You can see a live version at https://safe-cliffs-88589.herokuapp.com/
 
To do:

- Fix issues raised
- Write more tests (especially integration)
- Wire up to a NoSQL database
- Implement some more interesting features :-)


### Run Locally

You will need to register the app with [AuthO](https://auth0.com/) and add the following to a .env file at the root. AuthO is a library for securely managing the registration / log process. 

```
AUTH0_CLIENT_ID=[...add client id]
AUTH0_DOMAIN=[...add AuthO domain]
```

Then run:

```
npm install
npm run start-dev
```
