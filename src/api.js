import $ from 'jquery';

export class Api {

  getTasteData(tasteQuery, tasteType, callback) {
    const tasteKey = process.env.TASTE_API_KEY;
    const movieKey = process.env.MOVIE_KEY;
    let array = [];
    let wikiArr = [];
    $.get(`https://tastedive.com/api/similar?k=${tasteKey}&q=${tasteQuery}&type=${tasteType}`).then(function(response){
      for (var i = 0; i < 10; i++) {
        console.log(response.Similar.Results[i].Name);
        array.push(response.Similar.Results[i].Name);
      }

      array.forEach(function(movie) {
        $.get(`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${movie}`).then(function(response){
          let summary = response.results[0].overview
          let poster = response.results[0].poster_path
          callback(summary, poster);
        });
      });
    }).fail(function(error) {
      alert("You failed. You are a failure. You failed.")
    });
  }
}


// getWikiData(movieArray) {
//   let wikiArr = [];
//   movieArray.forEach(function(movie) {
//     movie = movie.replace(" ", "%20")
//     console.log(movie);
//     $.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${movie}`).then(function(response){
//       wikiArr.push(response.query.pages);
//       alert(wikiArr)
//       //movieArray.push(response.query.extract);
//     }).fail(function(error) {
//       alert("You failed to get plot summaries. You are a sad person.")
//     });
//     console.log("Your wikiArr: ", wikiArr);
//     return wikiArr;
//   }); // movieArray loop
// } // getWikiData
