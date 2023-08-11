const FormulaireeventModel = require("../models/formulaireevent.model");
const Event = require("../models/event.model");
//func ajout
exports.ajouterFormulaireevent = (req, res) => {
  const formulaireeventObj = {
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    title: req.body.title,
    price: req.body.price,
  };
  
  const formulaireevent = new FormulaireeventModel(formulaireeventObj);
  formulaireevent.save((error, createdFormulaireevent) => {
    if (error) return res.status(400).json({ error });
    if (createdFormulaireevent) {
      Event.findByIdAndUpdate(
        req.body.eventId,
        { $inc: { places: -1 } }, 
        { new: true, runValidators: true },
        function (err, updatedEvent) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated Event: ", updatedEvent);
          }
        }
      )
      return res.status(200).json({ createdFormulaireevent });
    }
  });
};

//func modif

exports.modifierFormulaireevent = (req, res) => {
  const param = req.params.idformulaireevent;
  const modifiedObj = {
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    title: req.body.title,
    price: req.body.price,
  };
  FormulaireeventModel.findByIdAndUpdate(param, modifiedObj).exec(
    (error, modifformulaireevent) => {
      if (error) return res.status(400).json({ error });
      if (modifformulaireevent) {
        return res.status(200).json({ message: " dest modif " });
      }
    }
  );
};
//supprimer

exports.supprimerFormulaireevent = (req, res) => {
  const param = req.params.idformulaireevent;

  FormulaireeventModel.findByIdAndDelete(param).exec(
    (error, deletedFormulaireevent) => {
      if (error) return res.status(400).json({ error });
      if (deletedFormulaireevent) {
        return res.status(200).json({ message: " destt deleted " });
      }
    }
  );
};

//lister

exports.listerFormulaireevent = (req, res) => {
  FormulaireeventModel.find({}).exec((error, formulaireeventList) => {
    if (error) return res.status(400).json({ error });
    if (formulaireeventList) {
      return res.status(200).json({ formulaireeventList });
    }
  });
};

exports.mostBookedEvent = (req, res) => {
  FormulaireeventModel.find({}).exec((error, formulaireeventList) => {
    if (error) return res.status(400).json({ error });

    if (formulaireeventList) {
      
      let eventCounts = {};

      for (let i = 0; i < formulaireeventList.length; i++) {
        let eventTitle = formulaireeventList[i].title;
        if (eventCounts[eventTitle]) {
         
          eventCounts[eventTitle]++;
        } else {
          
          eventCounts[eventTitle] = 1;
        }
      }

     
      let mostBookedEventTitle = Object.keys(eventCounts).reduce((a, b) => eventCounts[a] > eventCounts[b] ? a : b);

      return res.status(200).json({ mostBookedEventTitle, count: eventCounts[mostBookedEventTitle] });
    }
  });
};

exports.dailyEventBookings = async (req, res) => {
  try {
    const bookings = await FormulaireeventModel.aggregate([
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