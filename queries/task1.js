/*1.Find all documents in the collection where the age is greater than 30, and
only return the name and email fields.*/

// db.getCollection('practice-data').find({age:{$gt:30}}).project({name:1,email:1})

//2. Find documents where the favorite color is either "Maroon" or "Blue."
// db.test.find({favouriteColor:{$in: ['Maroon','Blue']}}).project({favouriteColor:1})

//3.Find all documents where the skill is an empty array.
// db.test2.find({skills:[]})
// db.test2.find({ "skills": { $size: 0 } })

//4.Find documents where the person has skills in both "JavaScript" and
"Java.";
// db.test.find({$and: [{"skills.name":'JAVASCRIPT'},{"skills.name":'JAVA'}]})

/*
5. Add a new skill to the skills array for the document with the email
"amccurry3@cnet.com". The skill is
{"name": "Python", "level": "Beginner", "isLearning": true}
Note: At first, you will have to insert the given email then add the skill
mentioned above*/

/*db.test.updateOne(
    { email: "amccurry3@cnet.com" },
    {
        // $push:
        $addToSet:
            {
                skills:{
                    "name": "Python", "level": "Beginner", "isLearning": true
                }
            }
    }
)*/

db.test.updateOne({ email: "amccurry3@cnet.com" }, { $pop: { skills: [1] } });
