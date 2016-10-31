/**
 * Created by Vitaliy on 24.10.2016.
 */

/*import {Router} from 'express';
import * as PersonController from '../controllers/person.controller';
const router = new Router();

// Get all People
router.route('/people').get(PersonController.getPeople);

// Get one person by cuid
router.route('/people/:cuid').get(PersonController.getPerson);

// Add a new Person
router.route('/people').post(PersonController.addPerson);

// Update a person by cuid
router.route('/people:cuid').put(PersonController.updatePerson);

// Delete a person by cuid
router.route('/people/:cuid').delete(PersonController.deletePerson);

export default router;*/






import * as PersonController from '../controllers/person.controller';


export default function (router, protectedMiddleware) {


  router.get('/people', protectedMiddleware, PersonController.getPeople);
  router.get('/people/:cuid', protectedMiddleware, PersonController.getPerson);
  router.post('/people', protectedMiddleware, PersonController.addPerson);
  router.patch('/people/:cuid', protectedMiddleware, PersonController.confirmPersonChanges);
  router.put('/people/:cuid', protectedMiddleware, PersonController.updatePerson);
  router.delete('/people/:cuid', protectedMiddleware, PersonController.deletePerson);
  return router;
};
