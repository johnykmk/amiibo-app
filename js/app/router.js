define(function() {

    var internals = {};
    var externals = {};

    internals.routes = {

        list: {
            hash: '#list',
            controller: 'listAmiibos-controller'
        },

        details: {
            hash: '#details',
            controller: 'details-controller'
        }
    };

    internals.defaultRoute = 'list';
    internals.currentHash = '';

    internals.hashCheck = function() {

        //nothing to do if route has not changed
        if (window.location.hash === internals.currentHash) {
            return;
        }

        //find the current route name
        var routeName = Object.keys(internals.routes).find(function(name) {

            return window.location.hash === internals.routes[name].hash;
        });

        //load default route if invalid
        if (!routeName) {

            internals.loadDefaultRoute();
            return;
        }

        internals.loadController(internals.routes[routeName].controller);
    };

    internals.loadController = function(controllerName) {

        internals.currentHash = window.location.hash;

        require(['controllers/' + controllerName], function(controller) {

            try {

            controller.start();

            } catch (err) {
                console.log(err.stack);
                window.location.hash = internals.routes[internals.defaultRoute].hash;
            }
        });
    };

    internals.loadDefaultRoute = function() {

        window.location.hash = internals.routes[internals.defaultRoute].hash;

        internals.loadController(internals.routes[internals.defaultRoute].controller);
    }

    externals.start = function() {

        console.log('router is working fine');

        window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;

        setInterval(internals.hashCheck, 150);
    };

    return externals;
});