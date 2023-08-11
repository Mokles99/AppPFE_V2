const ContactModel = require("../models/contact.model")
//func ajout
exports.ajouterContact = (req, res) => {
  const contactObj = {
    name: req.body.name,
    message: req.body.message,
    email:req.body.email,
  };

  const contact = new ContactModel(contactObj);
  contact.save((error, createdContact) => {
    if (error) return res.status(400).json({ error });
    if (createdContact) {
      return res.status(200).json({ createdContact });
    }
  });
};

//func modif

exports.modifierContact = (req, res) => {
  const param = req.params.idcontact;
  const modifiedObj = {
    name: req.body.name,
    message: req.body.message,
    email:req.body.email,
  };
  ContactModel.findByIdAndUpdate(param, modifiedObj).exec(
    (error, modifcontact) => {
      if (error) return res.status(400).json({ error });
      if (modifcontact) {
        return res.status(200).json({ message: " dest modif " });
      }
    }
  );
};
//supprimer

exports.supprimerContact = (req, res) => {
  const param = req.params.idcontact;

  ContactModel.findByIdAndDelete(param).exec(
    (error, deletedContact) => {
      if (error) return res.status(400).json({ error });
      if (deletedContact) {
        return res.status(200).json({ message: " destt deleted " });
      }
    }
  );
};

//lister

exports.listerContact = (req, res) => {
  ContactModel.find({}).exec((error, contactList) => {
    if (error) return res.status(400).json({ error });
    if (contactList) {
      return res.status(200).json({ contactList });
    }
  });
};
