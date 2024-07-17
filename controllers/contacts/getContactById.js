const Contact = require("../../models/contacts");
const { HttpError } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  try {
    // Пошук контакту за його ідентифікатором
    const contact = await Contact.findById(contactId);

    // Перевірка чи контакт був знайдений
    if (!contact) {
      throw HttpError(404, `Contact with ID ${contactId} not found`);
    }

    // Відправка відповіді з знайденим контактом
    res.json(contact);
  } catch (error) {
    // Обробка помилок
    res.status(error.status || 500).json({ message: error.message || "Failed to retrieve contact" });
  }
};

module.exports = getContactById;

// const Contact = require("../../models/contacts");

// const { HttpError } = require('../../helpers');

// const getContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const contactByID = await Contact.findById(contactId);
//   if (!contactByID) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }
//   res.json(contactByID);
// };

// module.exports = getContactById;