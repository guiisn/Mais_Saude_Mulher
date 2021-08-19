import { Router } from 'express';

import UserController from './controllers/UserController';
import AddressController from './controllers/AddressController';
import HealthUnityController from './controllers/HealthUnityController';
import HealthAgentController from './controllers/HealthAgentController';
import MammographyController from './controllers/MammographyController';
import CitologyController from './controllers/CitologyController';

const routes = Router();

routes.post('/create/user', UserController.createUser);//criar usuários
routes.get('/create/user', UserController.index);//listar todos os usuários
routes.post('/list/user', UserController.listOneUser);//listar todos os usuários


routes.post('/user/:user_id/address', AddressController.createAddress);//criar endereço p/ o usuário
routes.get('/user/:user_id/address', AddressController.index);//listar endereço do usuário

routes.post('/user/:user_id/health_unity', HealthUnityController.createHealthUnity);//criar unidade de saude p/ o user
routes.get('/user/:user_id/health_unity', HealthUnityController.index);//listar unidade de saude do user

routes.post('/user/:user_id/health_agent', HealthAgentController.createHealthAgent);//criar
routes.get('/user/:user_id/health_agent', HealthAgentController.index);//listar

routes.post('/user/:user_id/mammography', MammographyController.createMammography);//criar
routes.get('/user/:user_id/mammography', MammographyController.index);//listar

routes.post('/user/:user_id/citology', CitologyController.createCitology);//criar
routes.get('/user/:user_id/citology', CitologyController.index);//listar

export default routes;