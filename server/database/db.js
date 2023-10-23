import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL =`mongodb://${username}:${password}@ac-w2uwl8t-shard-00-00.z5y19d8.mongodb.net:27017,ac-w2uwl8t-shard-00-01.z5y19d8.mongodb.net:27017,ac-w2uwl8t-shard-00-02.z5y19d8.mongodb.net:27017/?ssl=true&replicaSet=atlas-jy83r4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log(`DB Connected Successfully`);
    }
    catch{
        console.log(`Error while connecting DB`, error.message);
    }
}

export default Connection;

//Note

/*
1. instead of mongoDb we use mongooss  as it has all function of mongo DB plus some more functions.
2. we import mongoose and call its connect function
3. connect function takes 2 input 1st is url of DB and 2nd is object of options.
   conncet is an asynchronous functionthus we need to use either then after connect function 
    i.e. mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true}).then or 
    we can use async await ,write async before Connection and Await before connect
4. Dont forget to configure dotenv.

*/