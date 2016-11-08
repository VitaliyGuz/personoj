/**
 * Created by Vitaliy on 25.10.2016.
 */

import * as PersonAttributeController from '../controllers/personAttribute.controller';

export default function (router, protectedMiddleware, requireAdministrator) {

  router.get('/personAttributes', protectedMiddleware, PersonAttributeController.getPersonAttributes);
  router.get('/localizationLabels/:language', PersonAttributeController.getLocalizationLabels);
  router.get('/personAttributes/:cuid', protectedMiddleware, PersonAttributeController.getPersonAttribute);
  router.post('/personAttributes', protectedMiddleware, requireAdministrator, PersonAttributeController.addPersonAttribute);
  router.put('/personAttributes/:cuid', protectedMiddleware, requireAdministrator, PersonAttributeController.updatePersonAttribute);
  router.delete('/personAttributes/:cuid', protectedMiddleware, requireAdministrator, PersonAttributeController.deletePersonAttribute);
  return router;
};

