const Contact = require("../../models/contacts");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;

  try {
    const newContact = await Contact.create({ ...req.body, owner });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to create contact" });
  }
};

module.exports = addContact;

// const Contact = require("../../models/contacts");

// const addContact = async (req, res) => {
//   const { _id: owner } = req.user;

//   const addContact = await Contact.create({ ...req.body, owner });
//   res.status(201).json(addContact);
// };

// module.exports = addContact;