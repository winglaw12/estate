import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async(req, res, next)=>{
   const { username, email, password } = req.body
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const newUser = new User({ username, email, password: hashedPassword })

//    use try and catch so able to send error message to user
try {
    await newUser.save()
    res.status(200).json('User created successfully')
} catch (error) {
    next(error)
}
    
}