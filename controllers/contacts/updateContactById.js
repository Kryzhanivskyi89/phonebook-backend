const Contact = require("../../models/contacts");
const { HttpError } = require('../../helpers');

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;

  try {
    // Перевірка чи передано ідентифікатор контакту та чи є дані для оновлення
    if (!contactId || Object.keys(body).length === 0) {
      throw HttpError(400, "Missing fields");
    }
    
    // Оновлення контакту за ідентифікатором, з отриманням оновленого об'єкту
    const updatedContact = await Contact.findByIdAndUpdate(contactId, body, { new: true });

    // Перевірка чи контакт був знайдений і оновлений
    if (!updatedContact) {
      throw HttpError(404, `Contact with ID ${contactId} not found`);
    }

    // Відправка відповіді з оновленим контактом
    res.json(updatedContact);
  } catch (error) {
    // Обробка помилок
    res.status(error.status || 500).json({ message: error.message || "Failed to update contact" });
  }
};

module.exports = updateContactById;

// const Contact = require("../../models/contacts");

// const { HttpError } = require('../../helpers');

// const updateContactById = async (req, res) => {
//   const { contactId } = req.params;

//   if (!contactId || Object.keys(req.body).length === 0) {
//     throw HttpError(400, "missing fields");
//   }
  
//   const contactByID = await Contact.findByIdAndUpdate( contactId, req.body, { new: true });
  
//   if (!contactByID) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }
//   res.json(contactByID);
// };

// module.exports = updateContactById;