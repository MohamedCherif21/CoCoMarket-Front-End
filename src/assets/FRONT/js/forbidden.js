(function ($) {
  'use strict';
var root = $("html")[0];
var eyef = $("#eyef")[0];
var cx = $("#eyef").attr("cx");
var cy = $("#eyef").attr("cy");

$(document).on("mousemove", function(evt) {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;

  $(root).css("--mouse-x", x);
  $(root).css("--mouse-y", y);
  
  cx = 115 + 30 * x;
  cy = 50 + 30 * y;
  $(eyef).attr("cx", cx);
  $(eyef).attr("cy", cy);
});

$(document).on("touchmove", function(touchHandler) {
  let x = touchHandler.touches[0].clientX / innerWidth;
  let y = touchHandler.touches[0].clientY / innerHeight;

  $(root).css("--mouse-x", x);
  $(root).css("--mouse-y", y);
});
})(jQuery);
