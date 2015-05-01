var http = require('http');
var request = require("request");

var LinkedInService = function () {

};

LinkedInService.prototype.getToken = function (clientCode, callback) {
  request.post(
      {
        url: 'https://www.linkedin.com/uas/oauth2/accessToken',
        form: {
          grant_type: 'authorization_code',
          code: clientCode,
          redirect_uri: 'http://localhost:3000',
          client_id: '75bhjbeib8ljx4',
          client_secret: 'LkVVqieuojntLXCQ'
        }
      },
      function (err, httpResponse, body) {
        console.log(err);
        callback(JSON.parse(body).access_token);
      }
  );
};

LinkedInService.prototype.getContacts = function (token, callback) {
  var url = "https://api.linkedin.com/v1/people/~/connections:(public-profile-url)?start=0&count=250&modified=updated"
  //var url = "https://api.linkedin.com/v1/people/~/connections:(id,first-name,last-name,location:(name),picture-url)?"
        //+ "oauth2_access_token="
        //+ token
      + "&format=json";

  request.get(
      {
        'auth': {'bearer': token},
        'url': url
      },
      function (err, httpResponse, body) {
        console.log(err);
        callback(token, body);
      }
  );
};

module.exports = new LinkedInService();