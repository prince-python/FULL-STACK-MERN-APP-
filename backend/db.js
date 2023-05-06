const mongooses=require('mongoose');
const mongoURI='mongodb://localhost:27017/prince?directConnection=true'

const connectToMongo =()=>{
    mongooses.connect(mongoURI)
}

module.exports=connectToMongo;