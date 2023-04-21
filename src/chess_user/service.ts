import { mongo } from '../demo-mongo/mongo';
import { User, UserLoginBody } from './user';


  export async function getOneUserByUserName(loginbody: UserLoginBody){
    const UserCollection = mongo.db?.collection<User>('users')
    const user = await UserCollection?.findOne({email: loginbody.email, password: loginbody.password})
    return user
  }
  export async function getAllUser(){
    const UserCollection = mongo.db?.collection<User>('users')
    const user = await UserCollection?.find().toArray()
    return user
  }

  export async function addNewUser(newUser: User) {
    const UserCollection = mongo.db?.collection<User>('users')
    UserCollection?.insertOne(newUser);
    return
  }

  export async function modifyUserPassword(newPassword: any, emailUser: string) {
    const UserCollection = mongo.db?.collection<User>('users')
    UserCollection?.updateOne({email: emailUser}, {$set: {password: newPassword.password}})
    return
  }

