define(function() {

    var internals = {};
    var externals = {};

    internals.elements = {};
    internals.handlers = {};

    externals.render = function(amiibo) {

        console.log(amiibo);
        internals.elements.app = $('#app');
       
        if (amiibo) {

            console.log('here on view-externals.render');
            internals.renderAmiibos(amiibo);
        }
    };

    internals.renderAmiibos = function(amiibo) {

        if (internals.elements.amiiboCard) {
            internals.elements.amiiboCard.empty();
        }

        internals.elements.amiiboCard = $(internals.createAmiiboCard(amiibo));
        internals.elements.app.append(internals.elements.amiiboCard);
    };

    internals.createAmiiboCard = function(amiibo) {

        var result = '';

        amiibo.forEach(element => {

            result += ('<div class="col mb-4"><div class="card bg-danger h-100">' + '<img id="' + element.tail + '"class="card-img-top" src="' + element.image + '" alt="Card image cap">' +
                       '<div class="card-body">' + '<h5 class="card-title text-white">' + element.name + '</h5>' +
                        '</div></div></div>')
                        
            //result += ('<div class="card"><img src="' + element.image + '" alt="Avatar" style="width:60%"></div>');            
        });

        return '<div class="row row-cols-1 row-cols-md-6">' + result;

        //return result;
    };

    return externals;
});