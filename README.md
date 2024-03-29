# What is Be The Hero?

Be the hero in an application where Non Governmental Organizations (NGO's) can publish incidents trough a web page that they want to solve and the budget needed to solve each incident. Afterwards, people from society can look in a mobile app all incidents that NGO's has published, choose one or more, and enter in contact by Email or Whatsapp with the NGO and donate money in order to help with the budget for the incident.

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

### Demo API URL: https://nodejs-backend-be-the-hero.herokuapp.com


## Composition of Be The Hero in therms of software projects:

- react frontend: https://github.com/gustavomrs/frontend_be_the_hero
- react-native mobile app: https://github.com/gustavomrs/mobile_be_the_hero
- node.js backend: https://github.com/gustavomrs/backend_be_the_hero


> Disclaimer: This is not an official platform, it was created only for study purposes.