$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  let slide = $("[id^='slide']");
  let slide_1 = $("#slide_1");
  let slide_2 = $("#slide_2");
  let thumb_up = $("#thumb-up");
  let thumb_up_comment = $('#thumb-up-comment');
  let thumb_up_reply = $("#thumb-up-reply");
  let thumb_down = $("#thumb-down");
  let fav = $("#fav");
  let share = $("#share");
  let reply = $("#reply");



  slide.click(e => {
    e.preventDefault();

    slide_2.toggleClass('slide-right');
    slide_1.toggleClass('social-container-right');
  });

  $('.carousel.carousel-slider').carousel({
    fillWidth: true,
    indicators: true
  });

  thumb_up.click(e => {
    e.preventDefault();
    if (thumb_up.hasClass('selected') == false && thumb_down.hasClass('selected') == false)
      thumb_up.addClass('selected');
    else if (thumb_down.hasClass('selected') == true) {
      thumb_down.removeClass('selected');
      thumb_up.addClass('selected');
    } else
      thumb_up.removeClass('selected');
  });

  thumb_down.click(e => {
    e.preventDefault();
    if (thumb_down.hasClass('selected') == false && thumb_up.hasClass('selected') == false)
      thumb_down.addClass('selected');
    else if (thumb_up.hasClass('selected') == true) {
      thumb_up.removeClass('selected');
      thumb_down.addClass('selected');
    } else
      thumb_down.removeClass('selected');
  });

  thumb_up_comment.click(e => {
    e.preventDefault();
    if (thumb_up_comment.hasClass('selected') == false)
      thumb_up_comment.addClass('selected');
    else
      thumb_up_comment.removeClass('selected');
  });

  thumb_up_reply.click(e => {
    e.preventDefault();
    if (thumb_up_reply.hasClass('selected') == false)
      thumb_up_reply.addClass('selected');
    else
      thumb_up_reply.removeClass('selected');
  });

  fav.click(e => {
    e.preventDefault();
    if (fav.hasClass('selected') == false) {
      fav.html('<i class="material-icons" id="fav">favorite</i>');
      fav.addClass('selected');
    } else {
      fav.html('<i class="material-icons" id="fav">favorite_border</i>');
      fav.removeClass('selected');
    }
  });

  share.click(e => {
    e.preventDefault();
    if (share.hasClass('selected') == false)
      share.addClass('selected');
    else
      share.removeClass('selected');
  });

  reply.click(e => {
    e.preventDefault();
    if (reply.hasClass('selected') == false)
      reply.addClass('selected');
    else
      reply.removeClass('selected');
  });

  /*
   ***** reply && share variables will be activators for modals...
   */
});