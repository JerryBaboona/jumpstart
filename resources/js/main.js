$(document).ready(function() {
  // Selected object (carousel) contains the elements that will rotate
  $(".carousel").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false
  })

  // Scrolling
  var scrollStartPositionY = 0;
  $(window).scroll(function() {
    // Gets the current vertical position of the scroll bar
    var scrollCurrentPositionY = $(this).scrollTop();
    // Hide scroll bar after certain distance scrolled down
    if ((scrollCurrentPositionY - scrollStartPositionY) > 50) {
      var navbarHeight = $(".navbar").css("height");
      $(".navbar").animate({ top: "-" + navbarHeight }, 150);
      scrollStartPositionY = scrollCurrentPositionY;
    }
    // Show scroll bar after certain distance scrolled back up
    else if ((scrollStartPositionY - scrollCurrentPositionY) > 50) {
      var navbarHeight = $(".navbar").css("height");
      $(".navbar").animate({ top: "0px" }, 150);
      scrollStartPositionY = scrollCurrentPositionY;
    }
  });
});
