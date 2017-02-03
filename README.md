# Checkin

Remote-friendly scrum checkins without the annoying meetings. Based on an project idea originally proposed by by [Eric Elliot](https://medium.com/@_ericelliott).

### Run Locally

You will need to register tha app with [AuthO](https://auth0.com/) and add the following to a .env file at the root. AuthO is a library for securely managing the registration / log process. 

```
AUTH0_CLIENT_ID=[...add client id]
AUTH0_DOMAIN=[...add AuthO domain]
```

Then run:

```
npm install
npm run start
```
