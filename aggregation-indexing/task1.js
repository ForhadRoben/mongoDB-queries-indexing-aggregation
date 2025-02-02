//1. Find all users with `"pizza"` as their favorite food and sort them according to age.

/*db.users.aggregate([
  {
    $match: { "favorites.food": "pizza" },
  },
  {
    $sort: { age: 1 },
  },
]);*/

//2.Find all users over `30` whose favorite color is `"green"`
/*
db.users.aggregate([
  {
    $match: { age: { $gt: 30 }, "favorites.color": "green" },
  },
]);
*/

//3.Count the number of users whose favorite movie is `"The Shawshank Redemption"`

/*db.users.aggregate([{
    $match: {'favourites.movie':"The Shawshank Redemption"},
},{
    $count: "count"
}])*/

//4.Update the zipcode of the user with the email `"johndoe@example.com"` to `"10002"`.
/*db.users.aggregate([{
    $match: { email: "johndoe@example.com" }
}, {
    $set: { "address.zipcode": "10002" },
}])*/

//5.Group users by their favorite movie and retrieve the average age in each movie group.
/*db.users.aggregate([{
    $group:
    {
        _id: "$favorites.movie",
        avgAge: { $avg: "$age" }

    }
},{
    $project: {
        avgAge:1
    }
}
])*/

//6.Calculate the average age of users with a favorite `"pizza"` food.

/*db.users.aggregate([
  // pipeline 1 --> people who loves pizza
  {
    $match: { "favorites.food": "pizza" },
  },
  // pipeline 2 --> average age of that group
  {
    $group: {
      _id: null,
      average: { $avg: "$age" },
    },
  },
  // pipeline 3 --> closest integer
  {
    $project: {
      _id: 0,
      average: { $floor: { $toInt: "$average" } },
    },
  },
]);*/

//7.Perform a lookup aggregation to retrieve the orders
//data along with the customer details for each order.
/*db.orders.aggregate([
    {
        $lookup: {
            from: "customers",        // The collection to join
            localField: "customerId", // The field in the `orders` collection
            foreignField: "_id",      // The field in the `customers` collection
            as: "customerDetails"     // The output array field
        }
    }
]);*/

//8.Group users by their favorite color and retrieve the count of users in each color group.
/*db.users.aggregate([
    {
        $group: {
            _id: "$favorites.color",
            name: { $push: '$name' },
            count: { $sum: 1 }
        }
    }
])*/

//9.Find the most common favorite food among all users.
/*db.users.aggregate([
    {
        $group: {
            _id: "$favorites.food",
            totalUsers: { $sum: 1 }
        },

    },
    { $sort: { "totalUsers": -1 } },
    { $limit: 1 }])*/

//10.Calculate the total count of friends across all users.
/*db.users.aggregate([
    {
      $group: { _id: "$name",
          totalFriends:{$sum:{$size:'$friends'}}
      }
    },
    {
        $project: {_id:1,totalFriends:1}
    }

    ])*/

// 11.Find the user(s) with the longest name.

/*db.users.aggregate([
  {
    $project: {
      name: 1,
      nameLength: { $strLenCP: "$name" } // Compute name length
    }
  },{
      $sort: {nameLength:-1}
  },{
      $limit: 1
  }
  ])*/

//12. Calculate each state's total number of users in the address field.

/*db.users.aggregate([
  {$group: {"_id":"$address.state",totalUser: {$sum:1}}},
  {$sort:{"totalUser":1}}
]);*/

//13.Find the user(s) with the highest number of friends.
/*db.users.aggregate([
    {$project: { "name": 1, "numFriend": { $size:"$friends" }}},
    { "$sort": { "numFriend": -1 } },
    {$limit:1}
])*/
