# Node.js backend for Be The Hero application 🚀

## Available endpoints:

- URL local: `localhost:3333`
- URL production: `https://nodejs-backend-be-the-hero.herokuapp.com`

PS: Some endpoits is needed to provide the header Authorization: ID_ONG


### Create Organization - [POST] URL/ongs


Request example
```
{
  "name": "NGO Gustavo",
  "email": "contato@mail.com",
  "whatsapp": "559393949592",
  "city": "Curitiba",
  "uf": "PR"
}
```

Response example
```
{
  "id": "1dfb5c3f"
}
```


### List Organizations - [GET] URL/ongs

Response example
```
{
  "ongs": [
    {
      "id": "68c2a716",
      "name": "APAD",
      "email": "contato@apad.com",
      "whatsapp": "123123",
      "city": "Curitiba",
      "uf": "PR"
    },
    {
      "id": "cd96e01f",
      "name": "Rescue cats",
      "email": "rescue@cats.com",
      "whatsapp": "123412341234",
      "city": "City",
      "uf": "UF"
    }...
  ]
}
```


### Create Incidents - [POST] URL/incidents?page=1



Request example
```
{
  "title": "Title of the incident",
  "description": "Description of the incident",
  "value": 200
}
```

Response example
```
{
  "id": 61
}
```


### List Incidents - [GET] URL/incidents

Response example
```
{
  "incidents": [
    {
      "id": 57,
      "title": "Rescue of cats",
      "description": "We've rescued 5 cats and we need help to buy medicine and food for them",
      "value": "100",
      "ong_id": "0f907357",
      "name": "Cat Rescuer",
      "email": "catrescuer@mail.com",
      "whatsapp": "5541978356786",
      "city": "Curitiba",
      "uf": "PR"
    },
    {
      "id": 62,
      "title": "Plan new trees",
      "description": "We want to plant new trees for next generations",
      "value": "100",
      "ong_id": "cd96e01f",
      "name": "Grow the seed",
      "email": "letsgrow@seed.com",
      "whatsapp": "123412341234",
      "city": "Campo Grande",
      "uf": "MS"
    },...
  ]
}
```

### Delete Incident - [DELETE] URL/incidents/:incident_id

(Authorization: ONG_ID)

response example (204)
```
{}
```

### Show profile - [GET] URL/profile
(Authorization: ONG_ID)

```
{
  "incidents": [
    {
      "id": 34,
      "title": "Rescue of cats",
      "description": "Description about the rescue project...",
      "value": "200",
      "ong_id": "68c2a716"
    },
    {
      "id": 35,
      "title": "Plant new trees",
      "description": "Plant new trees is importa for...",
      "value": "300",
      "ong_id": "68c2a716"
    },
  ]
}
```

### Login - [POST] URL/login

Request example
```
{
  id: 68c2a16
}
```

Success response example
```
{
  name: "Organization name"
}
```

Fail response example:
```
{
  "error": "ONG Not found with id 68c2a16"
}
```






