$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  let slide = $("[id^='slide']");
  let slide_1 = $("#slide_1");
  let slide_2 = $("#slide_2");
  
  slide.click(e => {
    e.preventDefault();

    slide_2.toggleClass('slide-right');
    slide_1.toggleClass('social-container-right');
  });

  $('.carousel.carousel-slider').carousel({
    fillWidth: true,
    indicators: true
  });
});