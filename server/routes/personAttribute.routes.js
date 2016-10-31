/**
 * Created by Vitaliy on 25.10.2016.
 */

/*import {Router} from 'express';*/
import * as PersonAttributeController from '../controllers/personAttribute.controller';
/*const router = new Router();


export default router;*/


export default function (router, protectedMiddleware) {

/*  // Get all People
  router.route('/personAttributes').get(PersonAttributeController.getPersonAttributes);

  // Get one person by cuid
  router.route('/personAttributes/:cuid').get(PersonAttributeController.getPersonAttribute);

  // Add a new Person
  router.route('/personAttributes').post(PersonAttributeController.addPersonAttribute);

  // Update a person by cuid
  router.route('/personAttributes:cuid').put(PersonAttributeController.updatePersonAttribute);

  // Delete a person by cuid
  router.route('/personAttributes/:cuid').delete(PersonAttributeController.deletePersonAttribute);*/

  router.get('/personAttributes', protectedMiddleware, PersonAttributeController.getPersonAttributes);
  router.get('/localizationLabels', PersonAttributeController.getLocalizationLabels);
  router.get('/personAttributes/:cuid', protectedMiddleware, PersonAttributeController.getPersonAttribute);
  router.post('/personAttributes', protectedMiddleware, PersonAttributeController.addPersonAttribute);
  router.put('/personAttributes/:cuid', protectedMiddleware, PersonAttributeController.updatePersonAttribute);
  router.delete('/personAttributes/:cuid', protectedMiddleware, PersonAttributeController.deletePersonAttribute);
  return router;
};

