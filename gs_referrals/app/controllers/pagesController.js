var locomotive = require('locomotive'),
    async = require('async'),
    linkedin = require('../services/linkedin'),
    Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Referrals Lounge';

  var nextSessionId = function() {
    return (Math.random() * 10000000000 + "");
  }

  this.sessionId = nextSessionId();

  var controller = this;
  linkedin.getToken(
      controller.param("code"),
      function (token) {
        linkedin.getContacts(
            token,
            function (token, connections) {
              controller.access_token = token;
              controller.connections = connections;
              controller.render();
            }
        );
      }
  );


}

module.exports = pagesController;
