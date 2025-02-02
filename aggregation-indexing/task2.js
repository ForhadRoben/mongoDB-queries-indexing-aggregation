//14.Count the number of people in each country.

/*db.people.aggregate([
 { $group: { _id: "$address.country", total: { $sum: 1 } } },
 { $sort : {total: -1}}
]).pretty()*/

//15. What is the most popular address and how many people live there?

/*db.people.aggregate([
    {
        $group: {
            _id: {
                country: "$address.country",
                city: "$address.city",
                postalCode: "$address.postalCode",
                street: "$address.street"
            },
            total: { $sum: 1 }
        }
    },
    { $sort: { total: -1 } },
    { $limit: 1 }
]).pretty()*/

//16.How many people in each country have ever paid at a restaurant?

/*db.people.aggregate([
    {$match: {'payments.name':'restaurant'}},
    {
      $group: { _id: "$address.country",
      totalPeople:{$sum:1}
      }  
    }
    ])*/

//17. How many people in each country have ever paid at a restaurant? same as 16

/*  db.people.aggregate([
 { $match: { "payments": { $elemMatch: { "name" : "restaurant" } } } },
 { $group: { _id: "$address.country", visits: { $sum: 1 } } },
 { $sort : { visits: -1 } }
]).pretty()*/

//18.There is a country where the average payment at a restaurant is the highest and
//a country where the average payment at a restaurant is the lowest.
//How many times more people in the first country spend than people in the second?

/*db.people.aggregate([
  // Stage 1: Unwind payments array to access each transaction separately
  { $unwind: "$payments" },

  // Stage 2: Filter for restaurant payments only
  { $match: { "payments.name": "restaurant" } },

  // Stage 3: Calculate the average restaurant spending per country
  {
    $group: {
      _id: "$address.country",
      avgAmount: { $avg: "$payments.amount" },
      totalPeople: { $sum: 1 } // Count number of people who made payments in each country
    }
  },

  // Stage 4: Group to find the countries with highest and lowest average spending
  {
    $group: {
      _id: null,
      highest: { $max: "$avgAmount" },
      lowest: { $min: "$avgAmount" },
      highestCountry: { $first: "$_id" }, // Store country name of highest spender
      lowestCountry: { $last: "$_id" },   // Store country name of lowest spender
      highestPeople: { $first: "$totalPeople" }, // Count of people in highest-spending country
      lowestPeople: { $last: "$totalPeople" }    // Count of people in lowest-spending country
    }
  },

  // Stage 5: Calculate the ratio of people
  {
    $project: {
      _id: 0,
      highestCountry: 1,
      highestAvgPayment: "$highest",
      highestPeople: 1,
      lowestCountry: 1,
      lowestAvgPayment: "$lowest",
      lowestPeople: 1,
      spendingRatio: { $divide: ["$highest", "$lowest"] } // How many times more
    }
  }
]).pretty();*/

/*db.people.aggregate([
 { $unwind: "$payments" },
 { $match: { "payments.name" : "restaurant" }},
 { $group: {
  _id: "$address.country",
  avgAmount: { $avg: "$payments.amount"} } },
 { $group: { _id: null,
            "minAmount" : {"$min" : "$avgAmount" },
            "maxAmount" : {"$max" : "$avgAmount" } } },
 { $project : { "diff" : { "$divide" : [ "$maxAmount", "$minAmount" ] } } }
]).pretty()*/

//19.Write a query to find all people with one or more transactions worth less than $5.
//The returned results only include the fields firstName, lastName and
//the payments array containing ALL elements with amount less than 5$.

db.people
  .aggregate([
    // Stage 1: Unwind the payments array
    { $unwind: "$payments" },

    // Stage 2: Match payments with amount less than $5
    { $match: { "payments.amount": { $lt: 5 } } },

    // Stage 3: Group back people with only relevant transactions
    {
      $group: {
        _id: "$_id",
        firstName: { $first: "$firstName" },
        lastName: { $first: "$lastName" },
        payments: { $push: "$payments" }, // Collect only matching payments
      },
    },

    // Stage 4: Project the required fields
    {
      $project: {
        _id: 0,
        firstName: 1,
        lastName: 1,
        payments: 1,
      },
    },
  ])
  .pretty();

//20.Write a query to calculate the total value that a person has paid by each category.

/*db.people.aggregate([
    // Stage 1: Unwind payments to process each transaction separately
    { $unwind: "$payments" },
  
    // Stage 2: Group by person and category, summing up total payments per category
    {
      $group: {
        _id: { firstName: "$firstName", lastName: "$lastName", category: "$payments.category" },
        totalSpent: { $sum: "$payments.amount" }
      }
    },
  
    // Stage 3: Group by person, accumulating total spent per category in an array
    {
      $group: {
        _id: { firstName: "$_id.firstName", lastName: "$_id.lastName" },
        categories: {
          $push: { category: "$_id.category", totalSpent: "$totalSpent" }
        }
      }
    },
  
    // Stage 4: Project the required fields
    {
      $project: {
        _id: 0,
        firstName: "$_id.firstName",
        lastName: "$_id.lastName",
        categories: 1
      }
    }
  ]).pretty();*/

/*db.people.aggregate([
    {
      $unwind: "$payments"
    },
    {
      $group: {
        _id: {
          _id: "$_id",
          firstName: "$firstName",
          lastName: "$lastName",
          category: "$payments.category"
        },
        amount: {
          $sum: "$payments.amount"
        }
      }
    },
    {
      $group: {
        _id: {
          _id: "$_id._id",
  
        },
        firstName: {
          $first: "$_id.firstName"
        },
        lastName: {
          $first: "$_id.lastName"
        },
        totalPayments: {
          $push: {
            category: "$_id.category",
            amount: "$amount",
  
          }
        }
      }
    },
  
  ]).pretty()*/
