define(function() {

    var internals = {};
    var externals = {};

    internals.elements = {};
    internals.handlers = {};

    externals.render = function(film) {

        internals.elements.app = $('#app');

        internals.renderButton();

        if (film) {

            internals.renderFilm(film);
        }
    };

    externals.bind = function(event, handler) {

        internals.handlers[event] = handler;
    };

    internals.renderButton = function() {

        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['onClickButton']);
        internals.elements.app.append(internals.elements.button);
    };

    internals.renderFilm = function(film) {

        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }

        internals.elements.filmCard = $(internals.createFilmCard(film));
        internals.elements.app.append(internals.elements.filmCard);
    };

    internals.createFilmCard = function(film) {

        return ('<div>' +
        '<p><strong>Title: </strong>' + film.title + '</p>' +
        '<p><strong>Year: </strong>' + film.year + '</p>' +     
        '</div>');  
    };

    internals.createButton = function() {

        return ('<button>Click me for a Random film</button>');
    };

    return externals;
});