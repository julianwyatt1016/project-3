// jshint esversion: 6

let failHandler = () => {
  console.log("fail -- unknown breed");
  $(".photos").empty().html("<h3> Error -- Breed Not Found <h3>");
};

//1. Define the onclick handler
let clickHandler = function() {
  let imgElem;
  let prefixURL =
    'https://dog.ceo/api/breed/';
  let suffixURL = '/images/random/6';
  //get value entered by user from textbox

  let breedTag = $('input[type = "text"]').val().toLowerCase();

  //let breedTag = (document.querySelector('input[type = "text"]').value).toLowerCase();

  //console.log(breedTag);
  let requestURL = prefixURL + breedTag + suffixURL;
  //console.log(requestURL);

//return jQuery collection

  //console.log(document.querySelectorAll("h2")[0].texContent);
  //console.log($("h2")[0].textContent);

  //clear old photos
  $('.photos').html('');
  //document.querySelector('.photos').innerHTML = '';

  $.getJSON(requestURL, function(dogAPIresponse) {
    //console.log(dogAPIresponse.message);
    dogAPIresponse.message.forEach((imgURL, index) => {

        // create a new element to hold the image

        let imgELem = $("<img>");
        //let imgElem = document.createElement('img');
        imgElem.hidden = true;

        // set the attribute to the response url
        imgElem.attr('src', imgURL);
        imgElem.attr('width', '100');

        // attach the img tag to the main
        // photos element and then fade it in
        //document.querySelector('.photos').appendChild(imgElem);
        $(".photos").append(imgElem);

        imgElem.hidden = false;

    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});
