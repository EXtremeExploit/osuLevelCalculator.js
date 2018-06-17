const request = require('superagent');
var userAgent = `osulevelcalculator.js (https://github.com/EXtremeExploit/osuLevelCalculator.js)`;

class Api {

    constructor() {
        this.baseUrl = 'https://olc.howl.moe';
    }

    apiCall(endpoint, options) {
        return new Promise((resolve, reject) => {
            request.get(this.baseUrl + endpoint)
                .set('User-Agent', userAgent)
                .query(options)
                .end((error, response) => {
                    if (!error && response.status === 200)
                        resolve(response.body);
                    else
                        reject(new Error(error.status || error.response));
                });
        });
    }

    calculateLevelSIM(ltr) {
        return new Promise((resolve, reject) => {
            this.apiCall('/api.php', { method: 'sim', ltr: ltr }).then(response => {
                if (response.length === 0) {
                    return reject(new Error(response));
                } else {
                    resolve(response);
                }
            }).catch(reject);
        });
    }

    calculateLevelCOM(curscore, tlvl) {
        return new Promise((resolve, reject) => {
            this.apiCall('/api.php', { method: 'com', curscore: curscore, tlvl: tlvl }).then(response => {
                if (response.length === 0) {
                    return reject(new Error(response));
                } else {
                    resolve(response);
                }
            }).catch(reject);
        });
    }
}
exports.Api = Api;
function api(apiKey) {
    return new Api(apiKey);
}
exports.api = api;