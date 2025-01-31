

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