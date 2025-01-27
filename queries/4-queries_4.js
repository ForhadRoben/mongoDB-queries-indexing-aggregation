//ctrl+shift+/-->doble comment, alt+shift+F-->formatting

//$set --> using $set , we update the field. for primitive data ,it works well.
//$addtoset --> can't give u duplicate value, addToSet er sathe 
              //$each use kore multi data add kora jay.
//$each modifier is available for use with the $addToSet operator and the $push operator.
//$push--> give duplicate value

/*db.test.updateOne({
    _id : ObjectId("6406ad63fc13ae5a40000064")},
    {
        $set:{interests:["Writing","Cooking",]}
    })*/

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $addToSet:{interests:{$each:["Gaming","Sleeping"]}}
})*/

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $addToSet: {interests:["Riding","Coding"]}
})*/

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $push:{interests:{$each:["Gaming","Sleeping"]}}
})*/




//$unset--> operator deletes a particular field.
//$pop -->operator removes the first or last element of an array.(-1:remove:first element,
                                                                //1 to remove the last element)
// $pull -->removes from an existing array all instances of a value or values that match 
                             // a specified condition
// $pullAll --> removes all instances of the specified values from an existing array.                             

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $unset:{course:1}
    // $unset:{course:''} //same
})

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")}, 
{
    $pop:{interests:[-1]
})*/

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $pull:{interests:["gaming"]
})*/

/*db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000064")},{
    $pullAll:{interests:["Sleeping",
		[ "Riding", "Coding" ],
		"Gaming",
		"Sleeping"]
})*/








