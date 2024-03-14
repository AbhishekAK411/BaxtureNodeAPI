
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



