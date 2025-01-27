/*indexing: process of optimizing the performance of queries by 
creating data structures that allow the database to efficiently retrieve
and serve data. Indexes in MongoDB are similar to indexes in other database systems,
such as SQL databases. They provide a way to quickly locate documents within a collection
by creating an ordered structure based on the values of one or more fields.*/

/*When you create an index on a field or a set of fields in a collection, 
MongoDB creates a separate data structure that maps the indexed 
field value to the location of the corresponding documents in the collection.*/

/*However, indexes also consume storage space and may impact write performance 
as MongoDB needs to update indexes whenever documents are inserted, updated, or deleted.*/
//Collscan (Collection Scan) vs Ixscan (Index Scan)


// db.test.find({_id:ObjectId("6406ad65fc13ae5a400000c6")}).explain("executionStats")
// db.test.find({email:"cthame2q@tumblr.com"}).explain("executionStats")

//single indexes 
// db.test.createIndex({email:1})
// db.test.dropIndex({email:1})

// db.getCollection('massive-data').createIndex({email:1})

//compound indexes

// db.getCollection('massive-data').createIndex({age:1,gender:-1})

// db.getCollection('massive-data').find({gender:'male', age:{$eq:20}}).project({age:1,gender:1})

/*A collection can have at most one text index. 
multiple full-text search indexes on a single collection*/
// db.getCollection("massive-data").createIndex({address:'text'})
// db.getCollection("massive-data").dropIndex("address_text")
db.getCollection("massive-data").createIndex({address:'text',about:'text'})
db.getCollection("massive-data").find({$text: { $search: "California" }}).project({address:1})















