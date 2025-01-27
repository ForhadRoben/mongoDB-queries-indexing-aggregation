//$and -->(explicit and) operator selects the documents that satisfy all the expressions. 
          //all expressions must be true.

//$or -->(explicit or) : at least one expression must be true. 
                     //we can use implicit or ($in) operator if fields are same.


//$nor-->selects the documents that fail all the query expressions in the array
//$not --> selects the documents that do not match

/*db.test.find({
    $nor:[
        {gender:{$in:["Male","Female"]}]
}).project({gender:1})*/

/*db.test.find({
    $nor:[{gender:{$eq:'Mal'}}]
}).project({gender:1,age:1})*/



/*db.test.find({
    $and:[
        {age:{$lte:30}},
        {gender:"Female"}]
})*/




/*db.test.find({
    $or:[
        {gender:"Female"}, 
        {interests:{$in:['Cooking','Gardening']}}]
}).project({gender:1,interests:1})*/


/*db.test.find({
    gender:{$not:{$eq:"Male"}}
}).project({gender:1})*/



//delete a document from a collection--> 
 /* db.test.deleteOne({
      _id: ObjectId("6406ad63fc13ae5a40000064")
   })*/
  //delete a collection from database
  //drop-->  db.students.drop( { writeConcern: { w: 1 } } )
