const RouteManager = function() { };

RouteManager.attach = function(app) {
    // Routes à utiliser
    app.use('/home', require('./home'));
    app.use('/user', require('./user'));
    app.use('/pass', require('./pass'));
}

module.exports = RouteManager;