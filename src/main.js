import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

$(document).ready(function() {
  let apiCall = new Api();
  let array = apiCall.getTasteData("Speed", "Movie");
  console.log("Your goddamned array", array);
  console.log(array[0]);



});
