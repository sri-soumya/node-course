const mongodb=require("mongodb");
const MongoClient = mongodb.MongoClient;

//console.log(mongodb.version;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// MongoClient.connect(connectionURL,{useUnifiedTopology: true}, (error, client)=>{
//     if(error)
//         console.log(error)

//     else{
//         console.log("working");
//         const db = client.db(databaseName);

//         db.collection("users").insertOne({
//             name: "Soumya",
//             age: 18
//         })
//     }
// });

MongoClient.connect(connectionURL, {useUnifiedTopology:true}, (error, client)=>{
    if(error)
        return console.log(error);

    //else{
        console.log("working");
        const db = client.db(databaseName);

        // db.collection("tasks").insertMany([
        //     {
        //         description: "wake",
        //         completed: true
        //     },
        //     {
        //         description: "study",
        //         completed: false
        //     },

        //     {
        //         description: "abc",
        //         completed: true
        //     }

        // ], (error, result)=>{
        //     console.log(result.ops);
        // })

        // db.collection("tasks").findOne({_id: new mongodb.ObjectId("5fb89099ab99282e503755b1")}, (error, result)=>{
        //     if(error)
        //         return console.log(error);

        //     console.log(result);


        // })


        // db.collection("tasks").find({completed:false}).toArray((error, result)=>{
        //     if(error)
        //         return console.log(error);

        //     console.log(result);
        // })

        // db.collection("tasks").updateMany({},{
        //     $set:{
        //         completed:true
        //     }

        // }).then((result)=>{
        //      console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })

        db.collection("tasks").deleteOne({description: "abc"}).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })

        
    
    
})