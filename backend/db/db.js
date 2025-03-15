import mongoose, { mongo } from 'mongoose';


function connect(){
    mongoose.connect(process.env.MONGO_URI)         // connect to our database
    .then(()=>{
        console.log('connected to database');
    })
    .catch((err)=>{ 
        console.log(err);     // log error if there is one  
    });
}

export default connect;