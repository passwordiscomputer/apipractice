import $ from 'jquery';

export class Api {

  getTasteData(tasteQuery, tasteType) {
    const tasteKey = process.env.TASTE_API_KEY;
    let array = [];
    $.get(`https://tastedive.com/api/similar?k=${tasteKey}&q=${tasteQuery}&type=${tasteType}`).then(function(response){
      for (var i = 0; i < 10; i++) {
        array.push(response.Similar.Results[i].Name);
      }
      console.log("API ARRAY: ", array);
    }).fail(function(error) {
      alert("You failed. You are a failure. You failed.")
    });
    return array;
  }

}
