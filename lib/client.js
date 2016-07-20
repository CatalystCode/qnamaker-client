var request = require('request');

function Client(opts) {
    if (!opts.serviceUrl) throw new Error('serviceUrl is required');
    
    var self = this;
    this.serviceUrl = opts.serviceUrl;
}

Client.prototype.get = function (opts, cb) {
    return new Promise((resolve, reject) => {

        if (!opts.question) throw new Error('question is required');
        cb = cb || (() => {});

        var self = this;

        var url = self.serviceUrl + encodeURIComponent(opts.question);

        var options = {
            url: url,
            json: true
        };

        return request(options, function(err, response, result) {
            if (err) {
                reject(err);
                return cb(err);
            }

            if (response.statusCode !== 200) {
                var error = new Error('Error invoking web request, statusCode: ' + 
                    response.statusCode + ' statusMessage: ' + 
                    response.statusMessage + ' URL: ' + options.url);

                reject(error);
                return cb(error)
            }

            resolve(result);
            return cb(null, result);
        });

    });
}

module.exports = Client;
