//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

//$(document).ready(function() {
    // document is loaded and DOM is ready
//    alert("document is ready");
//});

function init( jQuery ) {
    // Code to run when the document is ready.
    showName();
    updateBreedLinks();
    makeButton();


    $("#dogBreedForm").submit(function(event){
      event.preventDefault();
      bindEvents();
    });

    $("#fixPage").click(function(event){
      event.preventDefault();
      fixThePage();
    });

}

$( document ).ready( init );

//document.getElementById("problem-1").innerHTML = $( document ).ready( init )


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function showName() {
    $("#user").text("Alexis Zambrano");
}

// document.getElementById("problem-2").innerHTML =

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function updateBreedLinks() {

  $("#breedList a").each(function (index, value){
    $(this).attr("href", "https://www.google.com/search?q=" + $(this).text());
  });

}
// document.getElementById("problem-3").innerHTML =


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of =

function makeButton() {

  var r=$('<input/>').attr({
      type: "button",
      id: "fixPage",
      value: 'Fix The Page'
  });
  $("#myFixPageButton").append(r);

}


// document.getElementById("problem-4").innerHTML =

//problem-5.1

// place functions and supporting code here.  Uncomment line below and place answer the to right of =
function bindEvents() {
  addBreed();
}

// document.getElementById("problem-5.1").innerHTML =

//problem-5.2

// place functions and supporting code here.  Uncomment line below and place answer the to right of =

function addBreed() {

  $("#breedList").append('<li><a href="' + $('input[name="link"]').val() + $('input[name="breed"]').val() + '">' + $('input[name="breed"]').val() + '</a></li>');

}

// document.getElementById("problem-5.2").innerHTML =

//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function makeCards(arrCaptions = [],arrFilePaths = []) {

  // Get new Card
  var cardNumber = 0;
  var cardCaption;
  var cardFilePath;

  // loop the array
  for (var i = 0;i < arrCaptions.length;i++) {

    // append object in div "gallery"
    cardNumber = i + 2;
    cardCaption = arrCaptions[i];
    cardFilePath = arrFilePaths[i];

    $("#gallery").append('<div class="box box-lit"><h3>' + cardNumber + '</h3><img src="' + cardFilePath + '" class="gallery-img" alt="Pic ' + cardNumber + '" /><p>' + cardCaption + '</p></div>');

  }
}

// HERE ARE COMMENTED OUT SNIPPETS OF HTML THAT WILL BE REPLACED PROGRAMATICALLY USING JQUERY.
// THIS BELONGS INSIDE THE DIV WITH id="gallery"
// **********************************
// <div class="box">
//     <h3>02</h3>
//     <img src="images/pic_2.jpg" class="gallery-img" alt="Pic 2" />
//     <p>Replace this text with your own!</p>
// </div>
// <div class="box">
//     <h3>03</h3>
//     <img src="images/pic_3.jpg" class="gallery-img" alt="Pic 3" />
//     <p>Replace this text with your own!</p>
// </div>
// **********************************


// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// document.getElementById("challenge-1").innerHTML =


//challenge-2


// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function  fixThePage() {

    makeCards(["un coyote","otro coyote"],["./images/pic_2.jpg","./images/pic_3.jpg"]);

}






// document.getElementById("challenge-2").innerHTML =
