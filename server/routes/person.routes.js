/**
 * Created by Vitaliy on 24.10.2016.
 */

import * as PersonController from '../controllers/person.controller';

export default function (router, protectedMiddleware, requireAdministrator) {
  router.get('/people', protectedMiddleware, PersonController.getPeople);
  router.get('/people/:cuid', protectedMiddleware, PersonController.getPerson);
  router.post('/people', protectedMiddleware, PersonController.addPerson);
  router.get('/confirmPersonChanges/:cuid', protectedMiddleware, requireAdministrator, PersonController.confirmPersonChanges);
  router.put('/people/:cuid', protectedMiddleware, PersonController.updatePerson);
  router.delete('/people/:cuid', protectedMiddleware, requireAdministrator, PersonController.deletePerson);
  return router;
};
