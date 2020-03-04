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
        },
        {
            path: '/timeline/',
            url: 'timeline.html',
            keepAlive: false
        }
    ]
});

let mainView = app.views.create('.view-main');
