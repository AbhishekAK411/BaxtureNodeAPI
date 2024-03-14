
# Baxture Node API

Implementing CRUD Backend infrastructure with underlying in-memory database.

## Description

Implementing a CRUD(Create, Read, Update and Delete) backend infrastructure involves creating the fundemental operations necessary for managing data within an application.

Using an in-memory database(mongodb-memory-server) as the underlying storage mechanism means that the data is stored and manipulated within the computer's RAM, rather than being persisted to disk.

In summary, implementing a CRUD backend infrastructure with an in-memory database involves building the necessary functionality to manage data within an application, leveraging the speed and efficiency of storing data in memory for rapid access and manipulation.


## Acknowledgements

 - [NodeJS LTS Release v18.19.1 (Hydrogen)](https://nodejs.org/dist/v18.19.1/docs/api/)
 - [Typescript LTS Release v5.4.2](https://www.typescriptlang.org/download)



## Authors

- [@AbhishekAK411](https://github.com/AbhishekAK411)


## Badges

<div style="display: flex;">

  ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

  ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

  ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  
  ![Ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
  
  ![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  
  ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)
  
  ![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
  
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  
  ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
</div>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = 4000`

A .env.example is provided as well to imitate the .env file.



## Installation

Navigate to app directory

```bash
  cd my-project
```

Run install command for node_modules:

```bash
  npm install
```

For Development:

```bash
  npm run start:dev
```

For Build:

```bash
  npm run build
```

For Production:

```bash
  npm run start:prod
```

For Testing:

```bash
  npm test
```

For Load Balancer:

```bash
  npm run start:multi
```
## API Reference

#### Get all users

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No Parameters` | `NA` | `NA` |

#### Get a user

```http
  GET /api/users/{userId}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `UserId` | `string` | **Required** |

#### Create a user

```http
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Username`      | `string` | **Required** |
| `Age`      | `number` | **Required** |
| `hobbies`      | `string[] or Array<string>` | **Required** |

#### Update a user

```http
  PUT /api/users/{userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required** |

#### Delete a user

```http
  DELETE /api/users/{userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required** |




## Running Tests

To run tests, run the following command

```bash
  npm run test
```
![App Screenshot](https://github.com/AbhishekAK411/BaxtureNodeAPI/blob/master/app/tests/baxtureImg1.JPG?raw=true)
