import { Router } from 'express';
import { getHello, getUserById, postHello } from './moda.controller';

const routerModa = Router()

// GET http://localhost:8080/hello
routerModa.get('/hello', getHello) // NB: Ne pas appeler la fonction. On enregistre la reference vers la fonction getHello pour plus tard.

// POST http://localhost:8080/hello    data = { test: 42 }
routerModa.post('/hello', postHello)

// GET http://localhost:8080/user/something
routerModa.get('/user/:user_id', getUserById)

export default routerModa;
