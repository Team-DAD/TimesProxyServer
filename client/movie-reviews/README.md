# Moovi

Moovi Reviews module

## Related Projects

  - https://github.com/Team-DAD/movie-times
  - https://github.com/Team-DAD/movie-dada
  - https://github.com/Team-DAD/movie-summary

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Seeding](#seeding)
1. [Testing](#testing)

## Usage

Make sure to seed database if testing.
```sh
npm run build
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Seeding

From /database:
Change connection.js file if user is not root
```sh
node seed.js
```

From root:
```sh
npm run seed-db
```

If getting mysql version error try from mysql shell:
```sh
SHOW GLOBAL VARIABLES LIKE 'local_infile';
```

If value is false, set with:
```sh
SET GLOBAL local_infile = true;
```

## Testing
```sh
npm test
```