const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(() => {
    connection.migrate.rollback()
    connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        "name": "ONG",
        "email": "contato@mail.com",
        "whatsapp": "55123123456",
        "city": "Curitiba",
        "uf": "PR"
      })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
