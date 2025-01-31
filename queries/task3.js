//Count all people who were born before `January 1, 1970`

/*db.people.find({
  $expr: {
    $lt: [
      { $dateToString: { format: "%Y-%m-%d", date: "$birthDate" } }, 
      "1970-01-01"
    ]
  }
}).project({birthDate:1}).count();*/

// 7. Count all people with names: - `Lucas Dubois` - `Camille Dubois`

/*db.people.find({
    $or: [{ "firstName": "Lucas", "lastName": "Dubois" },
    { "firstName": "Camille", "lastName": "Dubois" }]
}).count()*/

//8.Count all the people who have no credits.
db.people.find({ "wealth.credits": { $size: 0 } }).count();

