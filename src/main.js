import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

const display = function(movie, image) {
  $('#content').append(`<div class="col-md-6"><div class="card" style="width:50rem;">
                                  <img src="http://image.tmdb.org/t/p/w185///${image}" alt="" style="width:185px;">
                                  ${movie}
                                <div class="card-body"></div>`);
}

$(document).ready(function() {
  let apiCall = new Api();
  $("button").click(function(){
    $('#content').empty();
    let movie = $('#input').val();
    apiCall.getTasteData(movie, "Movie", display);
  })

});
