const UserSchema = require('../../schema/User.schema')
const User = require('../../schema/User.schema')

const getUsers = async (req, res) => {
  try{
    const users = await User.find()
    res.send(users)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

const postUsers = async (req, res) => {
  const { name } = req.params
  const { bags } = req.body

    const newUser = new User({
      name,
      bags
    })
    newUser.save((error, result) => {
      if(error) {
        res.status(500)
        res.send(error)
        return
      }

      res.send('success')
    })
}

const updateUser = async (req, res) => {
  const { name } = req.params
  const { bags } = req.body

  try{
    const response = await UserSchema.update({name}, {bags})

    res.send(response)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

const deleteUser = async (req, res) => {
  const { name } = req.params
  try{
    await User.findOneAndDelete({name})
    res.send('succes')
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

module.exports = {
  getUsers,
  postUsers,
  updateUser,
  deleteUser,
}