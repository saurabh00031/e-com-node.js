var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/blogapp",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex: true,
   
}).then(()=>console.log("database connected....!"));

// Category schema 
const CategorySchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
      
});
module.exports = CategorySchema;