//menu top fixed
var fixed_top = $(".main-menu");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
        $('body').addClass("body-padding");
        fixed_top.addClass("menu-fixed animated fadeInDown");
    } else {
        $('body').removeClass("body-padding");
        fixed_top.removeClass("menu-fixed animated fadeInDown");
    }

});

//Js code for search box

$(".first-click").on("click",function () {
    $(".first-click").hide();
    $(".second-click").css('display', 'block');
    $(".main-menu").addClass("search-box");
});
$(".second-click").on("click",function () {
    $(".second-click").hide();
    $(".first-click").css('display', 'block');
    $(".main-menu").removeClass("search-box");
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$('ul.nav').each(function (i, liList) {
    var $liList = $(liList);
    $liList.on('click', 'li a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Check to see if the window is top if not then display button
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});




//google map location

function initMap() {
        var uluru = {lat: 23.739321, lng: 90.389146};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }




//swiper slider
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });


//lightcase
jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
  });



// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnHeight: 1,
  }
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
};
// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



