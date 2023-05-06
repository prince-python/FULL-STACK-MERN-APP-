const mongoose =require('mongoose');

const UserSchema= new Schema({

    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    datetime:{type:Date,default:Date.now}
})


mongoose.exports=mongoose.model('User',UserSchema)