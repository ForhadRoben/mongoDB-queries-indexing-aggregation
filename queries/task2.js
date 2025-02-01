

//1.Find all users who are located in `New York`.
db.users.find({
    address.city:'New York'
})
//2.Find the user(s) with the email "<johndoe@example.com>" and retrieve their favorite movie.
db.users.find({ email: "johndoe@example.com" },{ "email": 1, "favorites.movie": 1 })
//3.Delete the user with the email `"alicewilliams@example.com"` from the user data.
db.users.deleteOne({email:'alicewilliams@example.com'})
//4.Find the user(s) with the highest age.

db.users.find().sort({age:-1}).limit(1) // for Highest age
db.users.find().sort({age:+1}).limit(1) // for Lowest age

//5.Count all the people named `Pauline Fournier`.
db.people.find({firstName:'Pauline',lastName: 'Fournier'}).count()

//6 Count all people whose name is `Pauline Fournier` and who were born before `January 1, 1970`.
db.people.find(
    {"firstName": "Pauline",
    "lastName": "Fournier", 
    "birthDate": {$lt: ISODate("1970-01-01T00:00:00.000Z")}} ).count()

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

db.people.find({
    lastName: "Dubois",
    firstName: { $in: ["Lucas", "Camille"] }
  });
  
  
//8.Count all the people who have no credits.
  
  // db.people.find({ "wealth.credits": { $size: 0 } }).count();
  
//9.Count everyone who spent exactly `$12.99` on the `cinema`
  /*db.people.countDocuments({
    "payments": { 
      $elemMatch: { 
        "name": "cinema", 
        "amount": 12.99 
      } 
    }
  });*/
  
  /*db.people.find({payments:
      {
          $elemMatch:{
              name:'cinema',
              amount:12.99
          }
      }
  }).count()*/
//10.Count all the people whose first payment was `$12.99` for the `cinema`.
  
  db.people.countDocuments({
      'payments.0.name': 'cinema',
      'payments.0.amount': 12.99
  })
//11.Count all the people who have `never been to the cinema` (no cinema payments yet).
 /*  db.people.find({payments:
      {
              $nin:['cinema']
      }
  }).count() */
  
  // db.people.find({"payments.name": { $ne: "cinema" }});
  
  // db.people.find({"payments": {$not: {$elemMatch : {"name":"cinema"}}}} ).count()