const app = require("./app")
const mongoose = require("mongoose")
const supertest = require("supertest")

const UserSchema = require('./schema/User.schema')

UserSchema.find = jest.fn(() => Promise.resolve(
    [
      {
        _id: '5dbff32e367a343830cd2f49',
        name: 'John doe',
        bags: 5,
      }
    ]
  )
)

jest.useFakeTimers()

beforeEach((done) => {
  mongoose.connect = jest.fn()
})

describe('Users api tests', () => {
  fit('should return an user', async () => {
    const response = await supertest(app).get("/")
    /* eslint-disable */ console.log('response', response)
  })
})