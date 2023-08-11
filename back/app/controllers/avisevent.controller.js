const Avismodel = require("../models/avisevent.model")
//func ajout
exports.ajouterAvisevent = (req, res) => {
  const aviseventObj = {
    name: req.body.name,
    message: req.body.message,
   
  };

  const avisevent = new Avismodel(aviseventObj);
  avisevent.save((error, createdAvisevent) => {
    if (error) return res.status(400).json({ error });
    if (createdAvisevent) {
      return res.status(200).json({ createdAvisevent });
    }
  });
};

//func modif

exports.modifierAvisevent = (req, res) => {
  const param = req.params.idavisevent;
  const modifiedObj = {
    name: req.body.name,
    message: req.body.message,
    
  };
  Avismodel.findByIdAndUpdate(param, modifiedObj).exec(
    (error, modifavisevent) => {
      if (error) return res.status(400).json({ error });
      if (modifavisevent) {
        return res.status(200).json({ message: " dest modif " });
      }
    }
  );
};
//supprimer

exports.supprimerAvisevent = (req, res) => {
  const param = req.params.idavisevent;

  Avismodel.findByIdAndDelete(param).exec(
    (error, deletedAvisevent) => {
      if (error) return res.status(400).json({ error });
      if (deletedAvisevent) {
        return res.status(200).json({ message: " destt deleted " });
      }
    }
  );
};

//lister

exports.listerAvisevent = (req, res) => {
  Avismodel.find({}).exec((error, aviseventList) => {
    if (error) return res.status(400).json({ error });
    if (aviseventList) {
      return res.status(200).json({ aviseventList });
    }
  });
};
