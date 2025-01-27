
//The positional **$** operator identifies an element in an array to update without explicitly
// specifying the position of the element in the array.
//If there are multiple elements matching the query condition, 
//only the first one encountered in the array will be updated.

//update document in an array of object
db.test.updateOne(
    {
        _id: ObjectId("6406ad63fc13ae5a40000064"),
        "education.degree": "Master of Education"
    },
    {
        $set: {
            // "address.country":"Bangladesh" //$set object
            "education.$.major": "Biology" // array of object
        }
    }
)

//update value in an array 
db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000064"), languages: "Japanese" }, {
    $set: {"languages.$":"Bangla"}
})


////$inc--> increment a field by a specified value
/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $inc:{age:2}
})*/
