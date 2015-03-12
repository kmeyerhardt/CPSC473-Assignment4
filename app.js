window.useData = function(data){
    data.forEach(function(element){
        $content.append("<li>").text(element.name);
    });
}

var main = function () {
    "use strict";
    
    var $content = ("<ul>");
    var url = 'http://quetter.com/api-1.0/json/genre/en';
    
    
    $.ajax({
           type: 'GET',
           url: url,
           dataType: 'jsonp',
           jsonpCallback: 'useData',
           jsonp: 'callback',
    })
    
    
    /*$.ajax({
                type: 'GET',
                url: url,
                dataType: 'text',
                success: function(data) {
                    console.log(JSON.parse(data));
                    data.forEach(function(element){
                        $content.append("<li>").text(element.name);
                    });
                    $content.append("</ul>");
                }
    });*/
    $("main .info").append($content);
};


$(document).ready(main);