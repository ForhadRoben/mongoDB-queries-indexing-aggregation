db.test1.updateOne(
  { _id: 1, grades: 82 },
  {
    $set: { "grades.$": 80 },
  }
);

/*db.test1.updateOne({ _id: 1, grades: [85, 80, 82] },
{$set:{'grades.$[]':75}},{upsert:true}
)*/

/*db.test1.updateMany({},{
    $inc:{"grades.$[]":10}})*/

/*db.test1.updateOne(
    { grades: [ 88, 100, 100 ] },
    { $set: { "grades.$[ele]": 95 } },
    { arrayFilters: [{ ele: 0 }], upsert: true }
)*/

/*db.test1.updateMany(
   { },
   { $set: { "grades.$[element]" : 100 } },
   { arrayFilters: [ { "element": { $gte: 90 } } ] }*/

// db.test1.deleteOne({_id:ObjectId("6774f1ee3fae3680e2054d84")})
