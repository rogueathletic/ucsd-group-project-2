/* eslint-disable */
var keys = require("../../keys.js");
$(document).ready(function() {
//GET Search by City, State, Zip
var queryURL ="http://api.marketcheck.com/v1/search?api_key="+keys.api+"&make=ford&car_type=used&city=Los Angeles&zip=90001&start=0&rows=10"

$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    });
});
//GET Search by various car specs fields
//http://api.marketcheck.com/v1/search?api_key={your_api_key}&body_subtype=Crew Cab&latitude=34.05&longitude=-118.24&radius=5&start=0&rows=10&car_type=used&doors=4