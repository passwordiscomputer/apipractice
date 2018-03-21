import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

$(document).ready(function() {
  let apiCall = new Api();
  let array = apiCall.getTasteData("carol", "movie");
  console.log("YOUR MAIN.JS ARRAY: ", array);
});
