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

function displayAbout(){
    var about, art;
    var about_parse, art_parse; 
    about ='{"name" : "About", "explanation" : "This application works by augmenting the art work ", "score_card":"Fill up your score card by visiting all the art projects! "}';
    about_parse = JSON.parse(about);
    
    document.getElementById("name").innerHTML = about_parse.name;
    document.getElementById("explanation").innerHTML = about_parse.explanation;
    document.getElementById("score_card").innerHTML = about_parse.score_card;
    
}