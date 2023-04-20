import express from 'express'
import { router as userRouter } from '../chess_user/routes'
import { router as friendRouter } from '../chess_friend/routes'

export function initServer() {
  const app = express()
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
