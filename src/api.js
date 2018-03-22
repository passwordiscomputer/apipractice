import $ from 'jquery';

export class Api {
  requestMovie(movie) {
    return new Promise(function(resolve, reject){
      const tasteKey = process.env.TASTE_API_KEY;
      const movieKey = process.env.MOVIE_KEY;
      let request = new XMLHttpRequest();
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${movie}`;
      request.onload = function() {
        if (this.status === 200) {
          let reply = JSON.parse(request.response)
          resolve(reply.results[0].title);
        } else {
          reject(alert(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
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
