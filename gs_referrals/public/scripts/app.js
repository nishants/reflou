(function() {
  'use strict';
  var reflou = {};

  var getCode = function () {
    return window.location.href.split("code=")[1].split("&")[0];
  };

  reflou.fetchContacts = function(){
    var promise = new tiny.Promise();
      $.ajax({
        crossDomain: true,
        url: 'https://www.linkedin.com/uas/oauth2/accessToken',
        type: 'post',
        data: {
          grant_type: 'authorization_code',
          code: getCode(),
          redirect_uri: 'http%3A%2F%2Flocalhost%3A8080%2Freflou',
          client_id: '757j1l2lekta5q',
          client_secret: 'vOuDvPJ0oc1FPVpE'
        },
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded',
          "Access-Control-Allow-Origin": "*"
        },
        dataType: 'json',
        success: function (data) {
          console.info(data);
        }
      });

  };
  window.reflou = reflou;

}).call(this);