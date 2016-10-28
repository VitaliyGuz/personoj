/**
 * Created by Vitaliy on 24.10.2016.
 */

import * as UserController from '../controllers/user.controller';

export default function (router, protectedMiddleware) {
  router.post('/users/registration', UserController.create);
  router.post('/users/update', UserController.update);
  return router;
};