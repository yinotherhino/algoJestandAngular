<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p>NestJs Postgres Sequelize STACK with angular frontend</p>

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# required env vars (path- .env)

PORT
PGHOST
PGDATABASE
PGUSER
PGPASSWORD
ENDPOINT_ID
FRONTEND_ACCESS_KEY

# endpoints - /api/v1/forecasts

GET
<br>

`/` - all
<br>
`/hot` - hottest cities
<br>

`/rainy` - highest rainchance cities
<br>

`popular` - popular cities

POST
<br>

`/` {body: Array_Of_Weather_Objects}

### all endpoints require ['x-api-key'] from frontend which must be equal to FRONTEND_ACCESS_KEY

<h3>Documentation: <a href=''>postman doc</a></h3>
<h3>Api url: <a href='https://weather-api-nest.onrender.com'>URL</a></h3>
<h3>Frontend url: <a href='https://seams-weathered.netlify.app'>Frontend</a></h3>
