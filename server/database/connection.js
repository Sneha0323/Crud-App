const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        // Mongodb Connection string
        const con=await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlPareser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })
        console.log(`MongoDb connected: ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports= connectDB