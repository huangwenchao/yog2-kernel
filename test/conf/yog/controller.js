module.exports.controller = {
    rootRouter: function(router, dispatcher){
        return router;
    },
    defaultRouter: 'home',
    defaultAction: 'index',
    appPath: require('path').dirname(require.main.filename)
}