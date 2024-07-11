const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    category:String,
    releaseYear:Number
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData