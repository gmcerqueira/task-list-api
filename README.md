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

```cmd
npm install
```

### Run the app

```cmd
npm star
```

### Run the app in development

```cmd
npm run dev
```

<br />

## REQUESTS

## Test api connection

### Request

```cmd
GET /
```


### Response

  ```JSON
  {
    "connection": true
  }
  ```

<hr />

## Create new user

### Request

```cmd
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

<hr />

## Login user

### Request


```cmd
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

<hr />

## Create task

### Request


```cmd
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

<hr />

## Get tasks from user

### Request


```cmd
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

<hr />

## Get specific task from user

### Request


```cmd
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

<hr />

## Edit task text from user

### Request


```cmd
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

<hr />

## Change status of task from user

### Request

```cmd
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

<hr />


## Delete task from user

### Request


```cmd
DELETE /tasks/id

Header:
  Content-Type: application/json'
  Authorization: JWT
```

### Response

```JSON
true
```

<hr />
