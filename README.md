<img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" alt="Nestjs" title="Nestjs" height="120" width="96" align="right"/>

# Tarvos

## User

- Add user

`method: POST`
`http://localhost:3002/users`

Body:

```json
{
  "name": "John",
  "surname": "Doe",
  "age": 34,
  "email": "johndoe@mail.com",
  "password": "Q1w2e3r4t5y6u7i8o9"
}
```

Response:

```json
{
  "id": 5,
  "name": "John",
  "surname": "Doe",
  "age": 34,
  "email": "johndoe@mail.com",
  "password": "$2b$12$baVboKK4O9IqOOFvzaBS2OdI9GuxKecdG3dPnaVQanQKMEMJVVN0S",
  "createdAt": "2024-06-06T20:07:08.847Z",
  "updatedAt": "2024-06-06T20:07:08.847Z"
}
```

- Load all users with filters

With query:

`method: GET`

```bash
http://localhost:3002/users?name=jo
```

Response:

```json
[
  {
    "id": 5,
    "name": "John",
    "surname": "Doe",
    "age": 34,
    "email": "johndoe@mail.com",
    "password": "$2b$12$baVboKK4O9IqOOFvzaBS2OdI9GuxKecdG3dPnaVQanQKMEMJVVN0S",
    "createdAt": "2024-06-06T20:07:08.847Z",
    "updatedAt": "2024-06-06T20:07:08.847Z",
    "posts": []
  }
]
```

Without query:

`method: GET`

```bash
http://localhost:3002/users?name=jo
```

Response:

```json
[
  {
    "id": 1,
    "name": "William",
    "surname": "Koller",
    "age": 34,
    "email": "william.koller@icloud.com",
    "password": "$2b$12$oU5pREvVt9nt3ilfuaTuuunz.YQVX3n7b5eaj7hy.HkcIef2KVWwS",
    "createdAt": "2024-06-06T19:52:36.093Z",
    "updatedAt": "2024-06-06T19:52:36.093Z",
    "posts": []
  },
  {
    "id": 4,
    "name": "William",
    "surname": "Koller 1",
    "age": 34,
    "email": "william.koller1@icloud.com",
    "password": "$2b$12$NYpg9X2WWvE9SQxyXLyf2O6GkHMATt88wer9m2s1.ey3o/PH1ZdeW",
    "createdAt": "2024-06-06T20:06:36.090Z",
    "updatedAt": "2024-06-06T20:06:36.090Z",
    "posts": []
  },
  {
    "id": 5,
    "name": "John",
    "surname": "Doe",
    "age": 34,
    "email": "johndoe@mail.com",
    "password": "$2b$12$baVboKK4O9IqOOFvzaBS2OdI9GuxKecdG3dPnaVQanQKMEMJVVN0S",
    "createdAt": "2024-06-06T20:07:08.847Z",
    "updatedAt": "2024-06-06T20:07:08.847Z",
    "posts": []
  }
]
```
