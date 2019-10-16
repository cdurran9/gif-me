var express = require("express");
var app = express();
var request = require("request");
var giphy = "https://api.giphy.com/v1/gifs/random?api_key=CAHETFjiiIDOOJqlHQpXB3q6yEWqtxLb&tag=&rating=PG-13";

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    request(giphy, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            var gifURL = data.data.images.original.url;
            res.render("index", {newGif: gifURL});
        } else {
            console.log("Something went wrong: ", error);
        }
    });
});

// Listen
app.listen(3000, function(){
    console.log("GIF Me a Break listening.");
});