const express = require('express');

const router = express.Router();

const contactsControllers = require('../../controllers/contacts');

const { authenticate } = require('../../middlewares');

// const schemas = require("../../schemas/contacts");

// const { validateBody } = require("../../decorators");

// router.use("/", authenticate);

router.post('/',
    authenticate,
    // validateBody(schemas.contactsAddSchema),
    contactsControllers.addContact);

router.get('/',
    authenticate,
    contactsControllers.getAllContacts);

router.get('/:contactId',
    authenticate,
    // isValidId,
    contactsControllers.getContactById);


router.delete('/:contactId',
    authenticate,
    // isValidId,
    contactsControllers.deleteContactById);

router.put('/:contactId',
    authenticate,
    // isValidId,
    // validateBody(schemas.contactsUpdate),
    contactsControllers.updateContactById);


module.exports = router;