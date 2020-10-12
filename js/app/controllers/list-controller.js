define(['services/film-service', 'views/list-view'], function (filmService, listView) {

    var internals = {};
    var externals = {};

    externals.start = function() {

        internals.bindEventHandlers();
        listView.render();           
    };

    internals.bindEventHandlers = function() {

        listView.bind('onClickButton', internals.onButtonClickHandler);
    };

    internals.onButtonClickHandler = function() {

        var filmIndex = Math.floor(Math.random() * 6);

        filmService.getFilm(listView.render, filmIndex); 
    };
    
    return externals;
});