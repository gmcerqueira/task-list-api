# Task List API

The API allows you to:

- Create and login a user;
- Create, edit and delete task if user is verified using JWT ([Json Web Token](https://jwt.io/));

## Dependencies use

- Cors
- Express
- Express-rescue
- Joi
- Jsonwebtoken
- Mongodb

Live deploy of this project is available in [Heroku](https://dashboard.heroku.com/apps/task-list-api-gmc).

### **WARNING:** When using the live deploy, please don't use real information.

<br />

## INITIATE

### Install

```
npm install
```

### Run the app

```
npm star
```

### Run the app in development

```
npm run dev
```

<br />

## REQUESTS

## Test api connection

### Request

```
GET /
```


### Response

  ```JSON
  {
    "connection": true
  }
  ```

---

## Create new user

### Request

```
POST /signup

Header:
  Content-Type: application/json'

Body:
  {
    "email": "test@test.com",
    "firstName": "John",
    "lastName": "Snow",
    "password": "123456"
  }
```

### Response

```JSON
{
  "userId": "615f2c7d5a6be903d3d1a034"
}
```

---

## Login user

### Request


```
POST /login

Header:
  Content-Type: application/json'

Body:
  {
    "email": "test@test.com",
    "password": "123456"
  }
```

### Response

```JSON
{
  "token": "JWT",
  "user": {
    "_id":"615f2c7d5a6be903d3d1a034",
    "email":"test@test.com",
    "firstName":"John",
    "lastName":"Snow"
  }
}

```

---

## Create task

### Request


```
POST /tasks/create

Header:
  Content-Type: application/json'
  Authorization: JWT

Body:
  {
    "task":"test"
  }
```

### Response

```JSON
{
  "taskId": "615f31235a6be903d3d1a035"
}
```

---

## Get tasks from user

### Request


```
GET /tasks

Header:
  Content-Type: application/json'
  Authorization: JWT
```

### Response

```JSON
{
  "tasks": [
    {
      "_id": "615f31235a6be903d3d1a035",
      "userId": "615f2c7d5a6be903d3d1a034",
      "text": "test",
      "status": "pending",
      "created": "2021-10-07T17:40:51.679Z"
    }
  ]
}
```

---

## Get specific task from user

### Request


```
GET /tasks/id

Header:
  Content-Type: application/json'
  Authorization: JWT
```

### Response

```JSON
{
  "_id": "615f31235a6be903d3d1a035",
  "userId": "615f2c7d5a6be903d3d1a034",
  "text": "test",
  "status": "pending",
  "created": "2021-10-07T17:40:51.679Z"
}
```

---

## Edit task text from user

### Request


```
PUT /tasks/id

Header:
  Content-Type: application/json'
  Authorization: JWT

Body:
  {
    "task":"test modified"
  }
```

### Response

```JSON
{
  "_id": "615f31235a6be903d3d1a035",
  "userId": "615f2c7d5a6be903d3d1a034",
  "text": "test modified",
  "status": "pending",
  "created": "2021-10-07T17:40:51.679Z",
  "lastUpdate": "2021-10-07T17:41:15.359Z"
}
```

---

## Change status of task from user

### Request

```
PUT /tasks/check/id

Header:
  Content-Type: application/json'
  Authorization: JWT

Body:
  {
    "task":"test modified"
  }
```

### Response

```JSON
{
  "_id": "615f31235a6be903d3d1a035",
  "userId": "615f2c7d5a6be903d3d1a034",
  "text": "test modified",
  "status": "done",
  "created": "2021-10-07T17:40:51.679Z",
  "lastUpdate": "2021-10-07T17:43:43.375Z"
}
```

---


## Delete task from user

### Request


```
DELETE /tasks/id

Header:
  Content-Type: application/json'
  Authorization: JWT
```

### Response

```JSON
true
```

---
