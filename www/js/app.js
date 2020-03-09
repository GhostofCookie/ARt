/**
 * @file app.js
 * @author Tomas rigaux
 * @brief The framework 7 app logic.
 * 
 * Here is where the App is defined in terms of Framework 7. All core methods
 * are created and/or utilized here.
 */

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

function ToggleAR()
{
    let colour = 'color-yellow';
    if ($('#ar-btn').hasClass(colour))
        $('#ar-btn').removeClass(colour);
    else $('#ar-btn').addClass(colour);

    $('#ar').contents().find('#blur').fadeToggle();
};
 
//Use a redirect similiar to <a href="#" data-panel=".panel-right" class="panel-open"> inorder to open the panel 
function populatePanel(art_num){
    var name, explanation, score_card;   
    switch(art_num){
        case 1:
            name = "Art1";
            explanation = "Exp1";
            score_card = "Score card";
            
            break;
        case 2:
            name = "Art2";
            explanation = "Exp2";
            score_card = "Score card";
            break;          
        case 3:
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
            explanation = "This application works by augmenting the art work";
            score_card = "Fill up your score card by visiting all the art projects!";
    }
    displayPanel(name,explanation,score_card); 
}

function displayPanel(name, explanation, score_card){
    var panel_disp;
   
    panel_disp = JSON.parse( JSON.stringify({"name" : name, "explanation" : explanation, "score_card": score_card}));
        
    document.getElementById("name").innerHTML = panel_disp.name;
    document.getElementById("explanation").innerHTML = panel_disp.explanation;
    document.getElementById("score_card").innerHTML = panel_disp.score_card; 
}

//TODO: Creae table, use table cell colors for score card
