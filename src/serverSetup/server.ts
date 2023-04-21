import express from 'express'
import { router as userRouter } from '../chess_user/routes'
import { router as friendRouter } from '../chess_friend/routes'
import cors from 'cors';

const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']

const corsOptions = {
  origin: function (origin: any, callback: any) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}



export function initServer() {
  const app = express()

  app.use(cors(corsOptions))
  app.post('*', cors(corsOptions))
  
  app.use(express.json())

  /* Middleware, console.log each request */
  app.use((req, res, next) => {
    console.log(req.method, req.path, +new Date())
    next()
  })

  // app.use('/blog', routerBlog)
  app.use('/user', userRouter)
  app.use('/friend', friendRouter)

  


  app.listen(8080, () => {
    console.log('Listening on http://localhost:8080');
  })

  return app;
}
