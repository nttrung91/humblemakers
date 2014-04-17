/**************************
 * Responsive Trigger Menu
 **************************/

var $menu = $(".nav--primary"),
    $menuLink = $(".menu-link");

// Check to see if Javascript is available
$('.site-wrap').addClass('js');

$menuLink.click(function() {
  $menuLink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});


/**************************
 * Responsive Trigger SubMenu
 **************************/

 var $categoryLink = $("#triggerCategory"),
     $subMenu = $(".subMenu");

 $categoryLink.click(function() {
   $categoryLink.toggleClass('active');
   $subMenu.toggleClass('active');
   return false;
 });


/**************************
 *        Slider
 **************************/
$(document).ready(function() {

  // Add additionally classes for the purposes of designing
  $(".slidesjs-navigation").wrapAll("<div class='slidesjs-navigationWrap'></div>");
  $(".slidesjs-previous").empty().addClass("fontawesome-chevron-left");
  $(".slidesjs-next").empty().addClass("fontawesome-chevron-right");

});

// Controlling the Slider
$("#slides").slidesjs({
  width: 940,
  height: 600,
  effect: {
    slide: {
      speed: 200
    }
  },
  play: {
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    },
  pagination: {
        active: false,
          // [boolean] Create pagination items.
          // You cannot use your own pagination. Sorry.
      }
});