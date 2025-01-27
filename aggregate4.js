/*$facet Processes multiple aggregation pipelines within a single stage 
on the same set of input documents. 
Each sub-pipeline has its own field in the output document where its results are stored 
as an array of documents.*/

db.test.aggregate([
    {
        $facet: {
            //pipeline1
            friendSCount: [
                {
                    $unwind: "$friends"
                },
                {
                    $group: { _id: '$friends', count: { $sum: 1 } }
                }],
            //pipeline2
            skillsCount: [
                {
                    $unwind: "$skills"
                },
                {
                    $group: { _id: "$skills", count: { $sum: 1 } }
                }]

        }

    }
])