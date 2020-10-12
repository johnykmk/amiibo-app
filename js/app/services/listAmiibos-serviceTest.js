define(['models/amiibos'], function (Amiibo) {

    var internals = {};
    var externals = {};

    internals.API = 'https://www.amiiboapi.com/api/amiibo/?gameseries=The%20Legend%20of%20Zelda';

    externals.listAmiibos = function () {

        return fetch(internals.API).then(response => response.json()).then(object => processData(object));
    }

    function processData (object) {

        console.log('here!!!')
        console.log(object);
        return object.amiibo.map(object => new Amiibo(object));
    };

    return externals;
})