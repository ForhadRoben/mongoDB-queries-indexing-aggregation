//$unwind--> seperate each array elements, work with the values of the fields within an array ,
// use before $group stages, give distinct value

/*
 $bucket: Categorizes incoming documents into groups
groupBy: The field or expression used to determine bucket placement.
boundaries: An array defining the inclusive lower boundary and
exclusive upper boundary of each bucket.
default: (Optional) A bucket for values not falling within any specified boundary.
output: (Optional) Allows additional fields, computed using aggregation expressions
like $sum, $avg, etc.
*/
//$sort,$limit-->sort before limit


/*db.test.aggregate([
    {$unwind: "$interests"},
    // {$group: { _id: "$interests",count:{$sum: 1}}}
    {$group: { _id: '$age', count:{$sum:1},interestsPerAge:{$push:"$interests"}}}
    ])*/

db.test.aggregate([
    {
        $bucket: {
            groupBy: '$age',
            boundaries: [0, 20, 40, 60, 80],
            default: 'others',
            output: {
                count: { $sum: 1 },
                //   age:{$push:'$age'}
                // name:{$push:'$name'}
                fullDoc: { $push: '$$ROOT' }

            }
        }
    },
    { $sort: { count: -1 } },
    { $limit: 2 },
    { $project: { count: 1, 'fullDoc.name': 1 } }
])






















