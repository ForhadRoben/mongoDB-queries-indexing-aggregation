/*embedding vs referencing: Embedding stores related data directly inside a single document 
as subdocuments.Referencing stores related data in separate collections and links them using
references (IDs or foreign keys).
 $lookup merges fields from two collections.To perform an equality match between a field 
from the input documents with a field from the documents of the "joined" collection.*/

db.test.aggregate([
    {
        $match: {_id:ObjectId("6406ad63fc13ae5a40000065")},
    },
    {
        
        $lookup: {
               from: "orders",
               localField: "_id",
               foreignField: "userId",
               as: "user"
             }
    },
    {
        $project:{
            name:1,email:1,user:1
        }
    }
    ])
 