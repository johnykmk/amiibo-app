define(['services/listAmiibos-serviceTest', 'views/listAmiibos-view'], function (listAmiibosServiceTest, listAmiibosView) {

    var internals = {};
    var externals = {};

    externals.start = function() {

        console.log('here on controller-externals.start');

        internals.listAmiibos();          
    };

    internals.listAmiibos = function() {

        listAmiibosServiceTest.listAmiibos().then(object => listAmiibosView.render(object)); 
    };
    
    return externals;
});