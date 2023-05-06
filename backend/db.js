
const mongooses=require('mongoose')
const mongoURI='mongodb://127.0.0.1:27017/test'

const connectToMongo =()=>{
    mongooses.connect(mongoURI,console.log('connected to mongo'))
    
}

module.exports=connectToMongo;