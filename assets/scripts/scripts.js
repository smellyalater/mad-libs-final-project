$(document).on('ready', function() {


//get screen height
// var screenHeight = window.innerHeight;
//   $('.block').css("height",  + screenHeight + "px");


//animate scroll to next div - thanks css-tricks!
//css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Set input fields in localstorage


//Timeout for loading cat gif

//when someone clicks previous button
$('#catloader').on('click', function() {
  //add class to display preloader
   $('#preloader-img').addClass('preloading-cat');
     setTimeout(function() {
  //after 6seconds, remove class
  $('#preloader-img').removeClass('preloading-cat');
  $('#preload-complete, .story-is-ready').addClass('story-loaded');
  }, 6000)
    //after 6 seconds display proceed button and confirmation message
    
  });
});
