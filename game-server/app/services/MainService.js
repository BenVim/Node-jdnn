


var MainService = function (app, opts) {

};

module.exports = MainService;


MainService.prototype.start = function (cb) {

    cb();
};

MainService.prototype.stop = function (force, cb) {
    cb();
}

MainService.prototype.handleRequest = function (request, session, next) {

};