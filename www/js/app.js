/**
 * @file app.js
 * @author Tomas rigaux
 * @brief The framework 7 app logic.
 *
 * Here is where the App is defined in terms of Framework 7. All core methods
 * are created and/or utilized here.
 */

let app = new Framework7({
  root : '#app',
  name : 'Framework7',
  routes : [ {path : '/', url : 'index.html'} ]
});

let mainView = app.views.create('.view-main');

var scoreCounter = 0;
let about =
    {
      "name" : "About",
      "explanation": "Hello and welcome to ARt! The purpose of this app is to help you (the user) explore and experience the art projects created by the Indigneous Art Studio class at the university. Rather than a traditional gallery, many of these projects can be expanded on, and learned about by using this app. By implementing augmented reality into some of the projects themselves, you are able to explore the art from a completely new perspective. To learn about each of the projects, as well as their artist and the inspiration behind the work, simply scan the symbol placed by the piece and you should be able to interact with the information. The creators of this app are part of the Mobile App Development class in the new media department at the university, and come from a variety of majors including new media and computer science . Please keep in mind that we are by no means professionals and that you may run into some glitches while using this app, but we hope this doesn’t hinder your participation! We hope you enjoy the art experience and thank you for being a part of our project!<br><br>Sincerely,<br>Jessica, Kaylee, Shaizan, Tomas and Tristan",
        "score_card" :
          "Fill up your score card by visiting all the art projects!"
    }

/** Shorthand for document ready event listener. */
$(function() {
  DisplayPanel(JSON.stringify(about));

  let ar = document.getElementById('ar').contentWindow.document;
  $("#ar")
      .on('load', function() {
        // Populate the score cards.
        AddScoreCards();

        // Add markerFound events listeners to all the markers.
        var markers = ar.getElementsByTagName("a-marker");
        for (var i = markers.length - 1; i > -1; i--) {
          markers[i].addEventListener('markerFound', function() {
            if (!$('#ar').contents().find('#blur').is(":visible")) {
              DisplayPanel(this.innerHTML);
              if (this.getAttribute("visited") == undefined) {
                UpdateScoreCard();
                this.setAttribute("visited", true);
                app.panel.open(document.getElementById("panel"));
              }
              $('#profile-btn').show();
            }
          });

          markers[i].addEventListener('markerLost', function() {
            //$('#profile-btn').hide();
            DisplayPanel(JSON.stringify(about));
          });
        }
      });
});

/** Toggles the AR button and the "blur" effect. */
function ToggleAR() {
  let base_colour = 'color-grey';
  let colour = 'color-yellow';
  if ($('#ar-btn').hasClass(colour)) {
    $('#ar-btn').removeClass(colour);
    $('#ar-btn').addClass(base_colour);
  } else {
    $('#ar-btn').addClass(colour);
    $('#ar-btn').removeClass(base_colour);
  }

  $('#ar').contents().find('#blur').fadeToggle();
};

/** Displays the panel with the given JSON injected into the panel.
 * @params {string} json - The stringified JSON.
 */
function DisplayPanel(json) {
  var data = JSON.parse(json);

  if (data.name !== undefined)
    document.getElementById("name").innerHTML = data.name;
  if (data.explanation !== undefined)
    document.getElementById("explanation").innerHTML = data.explanation;
  if (data.score_card !== undefined)
    document.getElementById("score_card_exp").innerHTML = data.score_card;

  if (data.author !== undefined)
    document.getElementById("author").innerHTML = data.author;
  if (data.email !== undefined)
    document.getElementById("email").innerHTML = data.email;
  if (data.content !== undefined)
    document.getElementById("content").innerHTML = data.content;
}

/** Dynamically adds all the Score Cards based on the number of markers. */
function AddScoreCards() {
  var ar = $('#ar').contents();
  var markers = ar.find("a-marker");
  markers.each(function() {
    $("#score_cards").append("<div class='score_card'></div>");
  });
}

/** Updates the score cards to show that one has been flipped. */
function UpdateScoreCard() {
  var score_cards = $('#score_cards').find(".score_card");

  score_cards.each(function() {
    if (!$(this).hasClass("visited")) {
      $(this).addClass("visited");
      scoreCounter++;
      return false;
    }
  });
  if (scoreCounter == score_cards.length) {
    alert("Yay you finished!");
  }
}
