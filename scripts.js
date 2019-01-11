//Scroll into white background
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});
