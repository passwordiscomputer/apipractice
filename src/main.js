import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

const display = function(movie, image) {
  $('.container-fluid').append(`<div class="card" style="width:50rem;">
                                  <img src="http://image.tmdb.org/t/p/w185///${image}" alt="">
                                  ${movie}
                                <div class="card-body">`);
}

$(document).ready(function() {
  let apiCall = new Api();
  apiCall.getTasteData("Speed", "Movie", display);



});
