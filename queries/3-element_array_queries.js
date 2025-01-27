//exists 
/*db.test.find({
    age:{$exists:true}
})*/

// type

// db.test.find({age:{$type:'number'}})
// db.test.find({friends:{$type:"array"}})  // null,undefined,empty $array er jonno type use krbo
// db.test.find({company:{$type:"null"}})

// size
// $size operator matches any array with the number of elements specified by the argument.

// db.test.find({friends:{$size:0}}).project({friends:1})
// db.test.find({friends:{$size:4}}).project({friends:1})  //field must be array


//    -->$all is equivalent to an $and operation of the specified values 
//       where value field is an array


/*db.test.find({
    interests:{$all:["Cooking","Gaming"]}
}).project({interests:1})*/


//$elemMatch -->$elemMatch operator matches documents that contain an array field with
 //               at least one element that matches all the specified query criteria.
 
 
db.test.find({
    education:{
        $elemMatch:
		{"degree" : "Master of Education",
			"major" : "Biology"}}
}).project({education:1}