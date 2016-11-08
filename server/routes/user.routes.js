/**
 * Created by Vitaliy on 24.10.2016.
 */

import * as UserController from '../controllers/user.controller';

export default function (router, protectedMiddleware, requireAdministrator) {
  router.get('/users', protectedMiddleware, requireAdministrator, UserController.getUsers);
  router.post('/users/registration', UserController.create);
  router.post('/users/update', protectedMiddleware, requireAdministrator, UserController.update);
  return router;
};
