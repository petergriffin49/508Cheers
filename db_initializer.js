const fs = require("fs");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/cheers", {}).then(function(){
    console.log("db connected!")
});


// OLD MOVIE IMPORTING
const rawData = fs.readFileSync(__dirname + "/data.json").toString();
const jsonList = JSON.parse(rawData);

const movieSchema = {
    title:String,
    rating:Number,
    poster_path:String,
    release_date:String,
    overview:String
}
const movie = mongoose.model("Movie", movieSchema);
const movieList = []

jsonList.forEach(movie => {
    movieList.push({
       'title':movie.title,
       'rating':parseFloat(movie.vote_average),
       'poster_path':'http://image.tmdb.org/t/p/w342'+movie.poster_path,
       'release_date':movie.release_date,
       'overview':movie.overview,
    });
});

movie.insertMany(movieList).then(result=>{
    mongoose.connection.close();
    console.log("closed-")
}).catch(err =>{
  console.log(err);
});

