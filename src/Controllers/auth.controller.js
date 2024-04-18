import { UserModel } from '../Models/user.model.js'
import bcrypt from 'bcrypt'

export const registerController = async (req, res) => {
  const { name, username, password } = req.body

  const user = {
    name,
    username,
    password: await bcrypt.hash(password, 5)
  }

  const registerUser = await UserModel.registerUser(user)

  if (!registerUser) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Hubo un error al registrar al usuario'
    })
  }

  res.status(200)
  res.send(registerUser)
}

export const loginController = (req, res) => {
  res.send('Desde el loginController')
}
