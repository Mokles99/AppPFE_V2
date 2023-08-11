const FomulairedestModel = require("../models/formulairedest.model")
//func ajout
exports.ajouterFomulairedest = (req, res) => {
  const formulairedestObj = {
    name: req.body.name,
    message: req.body.message,
    email:req.body.email,
    number:req.body.number,
    title: req.body.title,
    price: req.body.price,
  };

  const formulairedest = new FomulairedestModel(formulairedestObj);
  formulairedest.save((error, createdFomulairedest) => {
    if (error) return res.status(400).json({ error });
    if (createdFomulairedest) {
      return res.status(200).json({ createdFomulairedest });
    }
  });
};

//func modif

exports.modifierFomulairedest = (req, res) => {
  const param = req.params.idformulairedest;
  const modifiedObj = {
    name: req.body.name,
    message: req.body.message,
    email:req.body.email,
    number:req.body.number,
    
    title: req.body.title,
    price: req.body.price,
  };
  FomulairedestModel.findByIdAndUpdate(param, modifiedObj).exec(
    (error, modifformulairedest) => {
      if (error) return res.status(400).json({ error });
      if (modifformulairedest) {
        return res.status(200).json({ message: " dest modif " });
      }
    }
  );
};
//supprimer

exports.supprimerFomulairedest = (req, res) => {
  const param = req.params.idformulairedest;

  FomulairedestModel.findByIdAndDelete(param).exec(
    (error, deletedFomulairedest) => {
      if (error) return res.status(400).json({ error });
      if (deletedFomulairedest) {
        return res.status(200).json({ message: " destt deleted " });
      }
    }
  );
};

//lister

exports.listerFomulairedest = (req, res) => {
  FomulairedestModel.find({}).exec((error, formulairedestList) => {
    if (error) return res.status(400).json({ error });
    if (formulairedestList) {
      return res.status(200).json({ formulairedestList });
    }
  });
};


exports.mostBookedDestination = async (req, res) => {
  try {
    const bookings = await FomulairedestModel.find({});
    let destinationCounts = {};
    for(let i = 0; i < bookings.length; i++) {
        let destinationTitle = bookings[i].title;
        if(destinationCounts[destinationTitle]) {
            destinationCounts[destinationTitle]++;
        } else {
            destinationCounts[destinationTitle] = 1;
        }
    }
    let mostBookedDestinationTitle = '';
    let maxCount = 0;
    for(const destination in destinationCounts) {
        if(destinationCounts[destination] > maxCount) {
            mostBookedDestinationTitle = destination;
            maxCount = destinationCounts[destination];
        }
    }
    res.json({mostBookedDestinationTitle, count: maxCount});
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des réservations.' });
  }
};


exports.dailyDestBookings = async (req, res) => {
  try {
    const bookings = await FomulairedestModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const result = bookings.map((b) => ({ x: b._id, y: b.count }));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des réservations.' });
  }
};