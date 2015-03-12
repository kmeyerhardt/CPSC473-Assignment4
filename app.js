// callback function
window.useData = function(data){
    var $content = ("<ul>");
    data.forEach(function(element){
        $content.append("<li>").text(element.name);
    });
    $("main .info").append($content);
}

var main = function () {
    "use strict";
    
    // url for get
    var url = 'http://quetter.com/api-1.0/json/genre/en';
    // GET request
    $.ajax({
           type: 'GET',
           url: url,
           dataType: 'jsonp',
           jsonpCallback: 'useData',
           jsonp: 'callback',
    })
};


$(document).ready(main);