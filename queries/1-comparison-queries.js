// db.test.find({gender:"Male"},{name:1,age:1,email:1})
// db.test.find({gender:"Male"}).project({name:1})
// db.test.find({gender:"Male"}).project({name:1,age:1})
// db.test.find({gender:{$eq:"Male"}})
// db.test.find({age:{$ne:30}})
// db.test.find({age:{$gte:30}}).sort({age:-1}) --> ascending
// db.test.find({age:{$gte:30}}).sort({age:1}) -->descending

// implicit and condition
// db.test.find({gender:"Male",interests:"Cooking",age:{$gte:18,$lte:30}},
                //   {age:1,gender:1,interests:1}).sort({age:1})
/*db.test.find({
    gender:"Female",
    interests:"Cooking",
    age:{$gte:18,$lte:30}},
    {age:1,interests:1,gender:1})
    .sort({age:1})*/

db.test.find({
        gender:"Female",
        interests:{$in:["Cooking","Gaming"]},
        age:{$nin:[18,20,22,24,26,28,30,50]}
    },
    {age:1,interests:1,gender:1}).sort({age:1})