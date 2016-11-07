/**
 * Created by Vitaliy on 24.10.2016.
 */

import * as PersonController from '../controllers/person.controller';

export default function (router, protectedMiddleware) {
  router.get('/people', protectedMiddleware, PersonController.getPeople);
  router.get('/people/:cuid', protectedMiddleware, PersonController.getPerson);
  router.post('/people', protectedMiddleware, PersonController.addPerson);
  router.get('/confirmPersonChanges/:cuid', protectedMiddleware, PersonController.confirmPersonChanges);
  router.put('/people/:cuid', protectedMiddleware, PersonController.updatePerson);
  router.delete('/people/:cuid', protectedMiddleware, PersonController.deletePerson);
  return router;
};
