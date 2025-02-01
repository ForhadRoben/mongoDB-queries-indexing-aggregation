//12. Count all the `female` who spent more than `$100` on `shoes` and
//more than `$50` on `pants` in one bill.
/*db.people.find({
    sex:'female',
    payments:{
        $all:[
            {$elemMatch:{name:'shoes',amount:{$gt:100}}},
            {$elemMatch:{name:'pants',amount:{$gt:50}}}
        ]
    }
})*/

//12. Count all the `female` who spent more than `$100` on `shoes` or
//more than `$50` on `pants` in one bill.

/*db.people.find({
  sex: "female",
  payments: {
    $elemMatch: {
      $or: [
        { name: "shoes", amount: { $gt: 100 } },
        { name: "pants", amount: { $gt: 50 } }
      ]
    }
  }
});*/

//13. Count all the people from `Warsaw`, `Poland` who have been
//to the `cinema` but never to the `disco`.

/*db.people.find({$and: [
{"address.city": "Warsaw"},
{"address.country": "Poland"},
{"payments": {$elemMatch: {"name": "cinema"}}},
{"payments": {$not: {$elemMatch: {"name": "disco"}}}}
]}).count()*/

/*db.people.countDocuments({
    'address.city':'Warsaw',
    'address.country':'Poland',
    payments:{$elemMatch:{name:'cinema'}}
    'payments.name':{$ne:'disco'}
    
    
})*/

// 14 Count all the `female` from `Paris` and `male` from `Cracow` that
//have all of the following properties:`flat`,`house`,`land`

// At least one of the properties must be valued at more than `$2,000,000`,
//and none of the properties under `$500,000`.

/*db.people.countDocuments({
    $and: [
        {
            $or: [
                { sex: "female", "address.city": "Paris" },
                { sex: "male", "address.city": "Cracow" }
            ]
        },
        {
            "wealth.realEstates.type": { $all: ["flat", "house", "land"] } // Ensures all property types exist
        },
        {
            "wealth.realEstates.worth": { $gt: 2000000 } // At least one property must be worth more than $2M
        },
        {
            "wealth.realEstates.worth": { $not: { $lt: 500000 } } // No property should be under $500K
        }
    ]
});*/

/*db.people.find({$and: [
 {$or: [ {$and: [ {"sex" : "female"}, {"address.city": "Paris"}  ] },
  {$and: [ {"sex" : "male"}, {"address.city": "Cracow"} ] } ] },
 {"wealth.realEstates": {$elemMatch: {"type": "flat"}}},
 {"wealth.realEstates": {$elemMatch: {"type": "house"}}},
 {"wealth.realEstates": {$elemMatch: {"type": "land"}}},
 {"wealth.realEstates": {$elemMatch: {"worth": {$gt: 2000000}}}},
 {"wealth.realEstates": {$not: {$elemMatch: {"worth": {$lt: 500000}}}}}
]}).count()*/

// 15. Count all the people who have exactly `10` transactions.

// db.people.find({"payments": {$size: 10}}).count()

//16. Finds all people with firstName = `'Thomas'` and returns only the following
//fields: `_id`, `firstName` and `lastName`.

// db.people.find({firstName:'Thomas'}).project({firstName:1,lastName:1})

// 17.Find everyone who has one or more transactions worth less than `$5`.
// The returned results only include the `firstName`, `lastName` and `payments`
// fields containing only the first word whose amount is less than 5$.

db.people
  .find({ "payments.amount": { $lt: 5 } })
  .project({
    firstName: 1,
    lastName: 1,
    payments: { $elemMatch: { amount: { $lt: 5 } } },
  });

/*db.people.find({ "payments": { $elemMatch: { "amount": { $lt: 5 } } } },
    { "firstName": 1, "lastName": 1, "payments.$": 1 })*/
