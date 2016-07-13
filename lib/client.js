var request = require('request');
var Q = require("Q");


function Client(opts) {
    if (!opts.serviceUrl) throw new Error('serviceUrl is required');
    
    var self = this;
    this.serviceUrl = opts.serviceUrl;
}

Client.prototype.get = function (opts, cb) {
    var deferred = Q.defer();

    if (!opts.question) throw new Error('question is required');
    cb = cb || function() {};
    var self = this;

    var url = self.serviceUrl + encodeURIComponent(opts.question);
    //console.log('calling', url);

    var options = {
        url: url,
        json:true
    }

    request(options, function(err, response, result) {
        if (err) {
            deferred.reject(error);
            return cb(err);
        }

        if (response.statusCode !== 200) {
            var error = new Error('Error invoking web request, statusCode: ' + statusCode);
            deferred.reject(error);
            return cb(error)
        }

        deferred.resolve(result);
        return cb(null, result);
    });

    return deferred.promise;
}

module.exports = Client;
