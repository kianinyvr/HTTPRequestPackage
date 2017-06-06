const request = require("request");
const fs = require("fs");

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on("error", function (err) {
          throw err;
        })
        .on("response", function(response) {
          console.log("HTTPS RESPONSE CODE: ", response.responeCode);
          console.log("Response Message: ", response.statusMessage);
          console.log("Content Type: ", response.headers['content-type']);
        })
        .pipe(fs.createWriteStream('./future.jpg'));

