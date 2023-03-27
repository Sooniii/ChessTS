import express from 'express'
import { routerOne } from './router'
import { routerAdmin } from './router-admin'

export function initServer() {
  const app = express()
  app.use(express.json())

  app.use(routerOne)
  app.use('/admin', routerAdmin)

  app.listen(8080, () => {
    console.log('Listening on http://localhost:8080');
  })

  return app;
}
