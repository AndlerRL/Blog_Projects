AOS.init({
  useClassNames: true,
  anchorPlacement: 'top-center',
  duration: 1300,
  easing: 'ease-in-out"',
  mirror: false,
  once: true
});

$(function () {
  if ($('[data-toggle="tooltip"]').length)
    $('[data-toggle="tooltip"]').tooltip();

  const fav = $('#fav');
  const voteUp = $('#vote-up');
  const voteDown = $('#vote-down');
  const share = $('#share');

  let count = 0;

  fav.click(e => {
    e.preventDefault();
    if (fav.hasClass('fa fa-heart-o') == true || count == 0) {
      fav.removeClass('fa fa-heart-o');
      fav.addClass('fa fa-heart');

      fav.css('color', '#00b0ff');

      count++;

      console.log(fav.hasClass('fa fa-heart'), count);
    } else if (fav.hasClass('fa fa-heart') != true || count == 1) {
      fav.removeClass('fa fa-heart');
      fav.addClass('fa fa-heart-o');

      fav.css('color', '#212529');

      count--;

      console.log(fav.hasClass('fa fa-heart'), count);
    };
  });

  voteUp.click(e => {
    e.preventDefault();

    if (voteUp.hasClass('selected') == false && voteDown.hasClass('selected') == false)
      voteUp.addClass('selected');
    else if (voteDown.hasClass('selected') == true) {
      voteDown.removeClass('selected');
      voteUp.addClass('selected');
    } else
      voteUp.removeClass('selected')
  });

  voteDown.click(e => {
    e.preventDefault();

    if (voteDown.hasClass('selected') == false && voteUp.hasClass('selected') == false)
      voteDown.addClass('selected');
    else if (voteUp.hasClass('selected') == true) {
      voteUp.removeClass('selected');
      voteDown.addClass('selected');
    } else
      voteDown.removeClass('selected');
  });

  share.click(e => {
    e.preventDefault();

    if (share.hasClass('selected') == false)
      share.addClass('selected');
    else
      share.removeClass('selected');
  });
});