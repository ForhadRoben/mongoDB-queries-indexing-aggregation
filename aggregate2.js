//$group: we can perform all the aggregation or summary queries that we need
/*$count	Calculates the quantity of documents in the given group.
$count is not used inside $group—it is a standalone aggregation stage or
its functionality can be achieved within $group using an accumulator like $sum*/
// $max	Displays the maximum value of a document’s field in the collection.
// $min	Displays the minimum value of a document’s field in the collection.
// $avg	Displays the average value of a document’s field in the collection.
// $sum	Sums up the specified values of all documents in the collection.
// $push	Adds extra values into the array of the resulting document.
// $ROOT--full document access korar jonno

/*db.test.aggregate([
    {$count:'allDocuments'}
    ])*/

/*db.test.aggregate([
    //stage1
    {
        $group: {
            _id: '$address.country',
            count: { $sum: 1 },
            // personBelongsCountry: { $push: { name: '$name' } }
            personBelongsCountry: { $push:'$$ROOT'} 
        }
    },
    //stage2
    {$project:
    {
        'personBelongsCountry.name':1,
        'personBelongsCountry.email':1
    }
        
    }
])*/

db.test.aggregate([
    {
        $group: {
            _id: null,
            maxAge: { $max: "$age" },
            minAge: { $min: "$age" },
            avgAge: { $avg: "$age" }

        }
    },
    {
        $project: {
            maxAge: 1,
            minAge: 1,
            averageAge:"$avgAge",
            subtraction: {$abs:{ $subtract: ["$minAge","$maxAge"]} }
        }
    }
])