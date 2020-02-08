/*jslint browser: true*/
/*global $, jQuery*/

// App function
var app = function ($) {
    // App behavior

    var width = $(".right_top").width();
    var wideLimit = width * .25;

    // jQuery UI
    $('.left_inner').resizable({
        handles: "e",
        start: function(limits) {}
    });
    $('.left_inner').resizable({
        handles: "e"
    });
    $('.right_bottom_inner').resizable({
        handles: "s"
    });

    var limits = function() {
        if ($(width).width() <= wideLimit) {
            $( ".left_inner" ).resizable( "disable" );
        }
    }
};

var appResize = function ($) {
    // Resize bahavior

    
};

// Run app function on ready
$(document).ready(app);

// Resize behavior
$(window).resize(appResize);