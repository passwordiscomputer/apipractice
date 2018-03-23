import $ from 'jquery';



export class Api {
//api calls
  getSimilarMovies(inputMovie, displayFunction){
    this.callTasteDiveApi(inputMovie)
    .then((response)=>{
      let movieArray = this.extractTasteDive(response);
      movieArray.forEach((movie)=>{
        this.callMovieDBApi(movie)
        .then((response)=>{
          displayFunction(this.extractMovieDB(response));
        })
      })
    });

  }
  //TASTE DIVE API takes in a movie title
  callTasteDiveApi(movie) {
    return new Promise(function(resolve, reject){
      const tasteKey = process.env.TASTE_API_KEY;
      let request = new XMLHttpRequest();
      let url = `https://tastedive.com/api/similar?k=${tasteKey}&q=${movie}&type=movie`;
      request.onload = function() {
        if (this.status === 200) {
          //returns list of similar movies
          resolve(request.response);
        } else {
          reject(alert(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  //Movie DB API TAKES IN A MOVIE TITLE
  callMovieDBApi(title) {
    return new Promise(function(resolve, reject){
      const movieDBKey = process.env.MOVIE_KEY;
      let request = new XMLHttpRequest();
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieDBKey}&query=${title}`;
      request.onload = function() {
        if (this.status === 200) {
          //returns the response at fulfillment of promise
          resolve(request.response);
        } else {
          reject(alert(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }


  //extract json files
  extractTasteDive(json){
    let array = [];
    let body = JSON.parse(json);
    body.Similar.Results.forEach(function(result){
      array.push(result.Name);
    });
    return array;
  }

  extractMovieDB(json){
    let array = [];
    let body = JSON.parse(json).results[0];
    return [body.title, body.overview, body.poster_path];
  }
}






  // requestMovie(movie) {
  //   return new Promise(function(resolve, reject){
  //     const tasteKey = process.env.TASTE_API_KEY;
  //     const movieKey = process.env.MOVIE_KEY;
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${movie}`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         let reply = JSON.parse(request.response)
  //         resolve(reply.results[0].title);
  //       } else {
  //         reject(alert(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   })
  // }



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
