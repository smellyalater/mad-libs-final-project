$(document).on('ready', function() {

//Reset Button Function
function resetForm() {
  $('.resetForm').click(function() {
      $(this).closest('form').find("input[type=text], textarea").val("");
  });
}

//First name form submit
$('#name-form').submit(function(event) {
  // event.preventDefault();
  console.log('hey');
  // var firstName = $('.first-name').val();
});


//Mad Libs Scripts
// Create an empty array to hold the words
  var words = [];
// When the form is submitted
  $('#word-input').submit(function(event) {
// Prevent the default form behavior
  event.preventDefault();
// Get an array of all the <input> elements
  var elements = $(this).find('input[type=text]');
// Loop through the array of the <input> elements
   for (var i = 0; i <= elements.length - 1; i++) {
  //  For each <input> element, get the value the user entered
   var value = $(elements[i]).val();
  // push the value onto the array of words
    words.push(value);
    }
});

// Build up the story:
var story = "Once upon a time there were two " + words[0] + " who had ";

// append story into the DOM


// $('.resetForm').on('click', 'resetForm()');
$('.resetForm').on('click', resetForm );

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


//Timeout for loading cat gif
$('#catloader').on('click', function() {
    $('#preloader-img').addClass('preloading-cat');
       setTimeout(function() {
    $('#preloader-img').removeClass('preloading-cat');
    $('#preload-complete, .story-is-ready').addClass('story-loaded');
    }, 6000)    
  });



});
