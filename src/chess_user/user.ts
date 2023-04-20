export interface User{
  username: string
  email: string
  sold: number
  password: string
}

export interface UserLoginBody{
  email: string
  password: string
}
