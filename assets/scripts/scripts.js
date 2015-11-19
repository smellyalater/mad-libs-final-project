$(document).on('ready', function() {

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
        }, 1200);
        return false;
      }
    }
  });
});


// Mad Libs Scripts
// On form submit, store inputs in variable and scroll page to #thinking div.
var madLibsWords = [];

$('#word-input').submit(function(event) {
  {
    event.preventDefault();
    var elements = $(this).find('input[type=text]');
    for (var i = 0; i <= elements.length - 1; i++) {
    var value = $(elements[i]).val();
    madLibsWords.push(value);
  } 

  {
    $('body,html').animate({'scrollTop':$('#thinking').offset().top}, 1200);
  }

}

console.log(madLibsWords);

var story = "The " + madLibsWords[0] + " went to the " + madLibsWords[1] + ' ' +  madLibsWords[2];
  console.log(story);
  $('.storytime').text(story);
});

//Reset Button Function
$('.reset-form').on('click', function() {
  $(this).closest('form').find("input[type=text], textarea").val("");
});


// $('#submit-story').on('click', function(event) {
//   event.preventDefault();
//   $('body,html').animate({'scrollTop':$('#thinking').offset().top}, 1200);
// });



//Timeout for loading cat gif
$('#submit-story').on('click', function() {
    $('#preloader-img').addClass('preloading-cat');
       setTimeout(function() {
    $('#preloader-img').removeClass('preloading-cat');
    $('#preload-complete, .story-is-ready').addClass('story-loaded');
    }, 8000)
  });



});
