
// Sample auth link
//  https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile




https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile
https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile




/*Steps in auth*/
1. register client with linkedin
  -> add the redirect url
  -> ad default permissions

2. Get access token :
    ask for the access permission using url like
    https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile

3. Get authorization:
  extract the code param on redirected url, to get access token.


    grant_type=authorization_code&code=987654321&redirect_uri=linkedin&client_id=123456789&client_secret=shhdonottell
https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile
https://www.linkedin.com/uas/oauth2/accessToken?response_type=code&client_id=757j1l2lekta5q&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&state=987654321&scope=r_basicprofile&client_secret=vOuDvPJ0oc1FPVpE&grant_type=authorization_code&code=AQRZEByig6M7ZXC5qLsIUU451d7DfTNhxIxCj5w-SCcji7HvPGF8AUEcEJS_AWXX-BMjpXMsZRFJkE4QdJjiGGn7oeasQ-SG1BwsfqpL5KwNTp-UhQw


    https://www.linkedin.com/uas/oauth2/accessToken?
    // =&
    // =&
    // redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Freflou&
    // state=987654321&
    // scope=r_basicprofile&
    // client_secret=vOuDvPJ0oc1FPVpE&
    // grant_type=authorization_code&
    // code=AQRZEByig6M7ZXC5qLsIUU451d7DfTNhxIxCj5w-SCcji7HvPGF8AUEcEJS_AWXX-BMjpXMsZRFJkE4QdJjiGGn7oeasQ-SG1BwsfqpL5KwNTp-UhQw


        $.ajax({
          crossDomain: true,
          url: 'https://www.linkedin.com/uas/oauth2/accessToken',
          type: 'post',
          data: {
            grant_type: 'authorization_code',
            code: 'AQRbUYTAKrgRKwmAuUGtNxgWCHIh6lVVV1c9YtpIoJLI16zyCqW8fxBznesfmaT-vi5ODs0J5xJ8HHUIQYuiLR-h5KRHgd3-7FHlA7RWI-JVcElIkDE',
            redirect_uri: 'http%3A%2F%2Flocalhost%3A8080%2Freflou',
            client_id: '757j1l2lekta5q',
            client_secret: 'vOuDvPJ0oc1FPVpE'
          },
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
          dataType: 'json',
          success: function (data) {
            console.info(data);
          }
        });
