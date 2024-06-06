<img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" alt="Nestjs" title="Nestjs" height="120" width="96" align="right"/>

# Tarvos

## User

- Add user

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
