const Contact = require("../../models/contacts");
const { HttpError } = require('../../helpers');

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;

  try {
    // Пошук і видалення контакту за його ідентифікатором
    const deletedContact = await Contact.findByIdAndRemove(contactId);

    // Перевірка чи контакт був знайдений і видалений
    if (!deletedContact) {
      throw HttpError(404, `Contact with ID ${contactId} not found`);
    }

    // Відправка відповіді з видаленим контактом
    res.json(deletedContact);
  } catch (error) {
    // Обробка помилок
    res.status(error.status || 500).json({ message: error.message || "Failed to delete contact" });
  }
};

module.exports = deleteContactById;

// const Contact = require("../../models/contacts");

// const { HttpError } = require('../../helpers');

// const deleteContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const contactByID = await Contact.findByIdAndRemove(contactId);
//   if (!contactByID) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }
//   res.json(contactByID);
// };

// module.exports = deleteContactById;