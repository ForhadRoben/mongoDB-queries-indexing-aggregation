//$project: avoid processing more data than is necessary
//$addFields: add new fields in the output but can't modify original collection
//$out: create a new  collection in database and this stage must be the last stage in the pipeline
//$merge:must be the last stage in the pipeline and add fieids to existing database
use("practice"); //database name
db.test.aggregate([
  //stage1
  { $match: { gender: "Male", age: { $lt: 30 } } },
  //stage2
  { $addFields: { course: "Level2" } },
  //stage3
  {
    $project: { email: 1, course: 1 },
  },
  //stage4
  // {$out:'course-student'}
  //   { $merge: "test" }
]);
