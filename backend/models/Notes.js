const mongoose =require('mongoose');

const NotesSchema= new Schema({

    title:{type:String,require:true},
    discription:{type:String,require:true},
    tag:{type:String,require:true,default:"general"},
    datetime:{type:Date,default:Date.now}
})


mongoose.exports=mongoose.model('Notes',NotesSchema)