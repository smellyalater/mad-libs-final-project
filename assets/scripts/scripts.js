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

madLibsWords = []

$('#word-input').submit(function(event) {
  event.preventDefault();
  var elements = $(this).find('input[type=text]');
  for (var i = 0; i <= elements.length - 1; i++) {
    var value = $(elements[i]).val();
    madLibsWords.push(value);
  }

console.log(madLibsWords);

$('body,html').animate({'scrollTop':$('#thinking').offset().top}, 1200);

});


$('#preload-complete').on('click', function() {
  $('#madLibsWords0').text(madLibsWords[0]);
  $('#madLibsWords1').text(madLibsWords[1]);
  $('#madLibsWords2').text(madLibsWords[2]);
  $('#madLibsWords3').text(madLibsWords[3]);
  $('#madLibsWords4').text(madLibsWords[4]);
  $('#madLibsWords5').text(madLibsWords[5]);
  $('#madLibsWords6').text(madLibsWords[6]);
  $('#madLibsWords7').text(madLibsWords[7]);
  $('#madLibsWords8').text(madLibsWords[8]);
  $('#madLibsWords9').text(madLibsWords[9]);
  $('#madLibsWords10').text(madLibsWords[10]);
  $('#madLibsWords11').text(madLibsWords[11]);
  $('#madLibsWords12').text(madLibsWords[12]);
  $('#madLibsWords13').text(madLibsWords[13]);
  $('#madLibsWords14').text(madLibsWords[14]);
  $('#madLibsWords15').text(madLibsWords[15]);
  $('#madLibsWords16').text(madLibsWords[16]);
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