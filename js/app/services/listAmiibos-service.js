var URL = 'https://www.amiiboapi.com/api/amiibo/?gameseries=The%20Legend%20of%20Zelda';

define(function() {

    var internals = {};
    var externals = {};

    internals.fetchData = function (cb) {

        $.ajax({

            url: URL,
            type: 'GET',
            dataType: 'json',
            success: function(results) {
    
                cb(null, results)
            },
            error: function(request, statusText, httpError) {
    
                cb(httpError || statusText)
            }
        });

    }

    externals.listAmiibos = function (cb) {

        console.log('here on service-externals.listamiibos');

        internals.fetchData(function (error, data) {

            if (error) {
                console.log('Error getting name')
            }

            var amiibo = data.amiibo;
            
            console.log(amiibo);

            cb(amiibo);

        });
    };

    return externals;
});