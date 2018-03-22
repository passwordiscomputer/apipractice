import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

// const display = function(movie, image) {
//   $('#content').append(`<div class="col-md-6"><div class="card" style="width:50rem;">
//                                   <img src="http://image.tmdb.org/t/p/w185///${image}" alt="" style="width:185px;">
//                                   ${movie}
//                                 <div class="card-body"></div>`);
// }

const displayMovie = function(movie) {
  alert("Here, finally, is your movie: " + movie)
}

$(document).ready(function() {

  let apiCall = new Api();
  let promise = apiCall.requestMovie('casa');
  promise.then(function(response){
    displayMovie(response);
  });

});
