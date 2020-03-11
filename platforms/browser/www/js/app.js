/**
 * @file app.js
 * @author Tomas rigaux
 * @brief The framework 7 app logic.
 * 
 * Here is where the App is defined in terms of Framework 7. All core methods
 * are created and/or utilized here.
 */
var score;

let app = new Framework7({
    root: '#app',
    name: 'Framework7',
    routes: [
        {
            path: '/',
            url: 'index.html'
        }
    ]
});

let mainView = app.views.create('.view-main');

<<<<<<< HEAD
=======
var scoreCounter = 0;

$(function () {
    populatePanel(0);

    let ar = document.getElementById('ar').contentWindow.document;
    $("#ar").on('load', function () {
        addScoreCards();
        //var buffalo = ar.getElementById("marker-buffalo");
        var markers = ar.getElementsByTagName("a-marker");
 var i;
       for( i=markers.length-1; i>-1; i--){
                markers[i].addEventListener('markerFound', function () {
                populatePanel(this.id);
                if (this.getAttribute("visited") == undefined) {
                    updateScoreCard();
                    this.setAttribute("visited", true);
                }

                app.panel.open(document.getElementById("panel"));
            });
        }
    
    });

});

function ToggleAR() {
    let colour = 'color-yellow';
    if ($('#ar-btn').hasClass(colour))
        $('#ar-btn').removeClass(colour);
    else $('#ar-btn').addClass(colour);

    $('#ar').contents().find('#blur').fadeToggle();
};

//Use a redirect similiar to <a href="#" data-panel=".panel-right" class="panel-open"> inorder to open the panel 
//art_num is the number of the art piece that we would like to display information about
function populatePanel(id) {
    var name, explanation, score_card;

    switch (id) {
        case "marker-buffalo":
            name = "Buffalo";
            explanation = "Exp1";
            score_card = "Score card";

            break;
        case "marker-bowls":
            name = "Art2";
            explanation = "Exp2";
            score_card = "Score card";
            break;
        case "marker-brothers":
            name = "Art3";
            explanation = "Exp3";
            score_card = "Score card";
            break;
        case 4:
            name = "Art4";
            explanation = "Exp4";
            score_card = "Score card";
            break;
        case 5:
            name = "Art5";
            explanation = "Exp5";
            score_card = "Score card";
            break;
        default:
            name = "About";
            explanation = "H";
            score_card = "Fill up your score card by visiting all the art projects!";
    }
    displayPanel(name, explanation, score_card);
}

function displayPanel(name, explanation, score_card) {
    var panel_disp;

    panel_disp = JSON.parse(JSON.stringify({
        "name": name,
        "explanation": explanation,
        "score_card": score_card
    }));

    document.getElementById("name").innerHTML = panel_disp.name;
    document.getElementById("explanation").innerHTML = panel_disp.explanation;
    document.getElementById("score_card_exp").innerHTML = panel_disp.score_card;
    //document.getElementById("score_card").innerHTML = score; 
}


function addScoreCards() {
    var ar = $('#ar').contents();
    var markers = ar.find("a-marker");
    markers.each(function () {
        $("#score_cards").append("<div class='score_card'></div>");
    });
}


function updateScoreCard() {
    var sc = $('#score_cards');
    var score_cards = sc.find(".score_card");

    score_cards.each(function () {
        if (!$(this).hasClass("visited")) {
            $(this).addClass("visited");
            scoreCounter++;
            return false;
        }
    });
    if(scoreCounter == score_cards.length){
        alert("Yaay you finished!");
    }
}






//TODO: Creae table, use table cell colors for score card
>>>>>>> 061ff21e520cbc4faf666952964178cf04dd505e
