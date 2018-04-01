module.exports = function (app){
    return new Handler(app);
};

var Handler = function(app){
    this.mainService = app.get('mainService');
}


Handler.prototype.request = function(request, session, next){
    this.mainService.handleRequest(request, session, next);
}