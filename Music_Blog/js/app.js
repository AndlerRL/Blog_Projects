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

  const fav = $('i[id="fav"]');
  const voteUp = $('i[id="vote-up"]');
  const voteDown = $('i[id="vote-down"]');
  const share = $('i[id="share"');

  const voteUpReact = $('i[id="vote-up-react"]');
  const voteDownReact = $('i[id="vote-down-react"]');
  const replyReact = $('i[id="reply-react"');

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

  voteUpReact.click(e => {
    e.preventDefault();

    if (voteUpReact.hasClass('selected') == false && voteDownReact.hasClass('selected') == false)
      voteUpReact.addClass('selected');
    else if (voteDownReact.hasClass('selected') == true) {
      voteDownReact.removeClass('selected');
      voteUpReact.addClass('selected');
    } else
      voteUpReact.removeClass('selected')
  });

  voteDownReact.click(e => {
    e.preventDefault();

    if (voteDownReact.hasClass('selected') == false && voteUpReact.hasClass('selected') == false)
      voteDownReact.addClass('selected');
    else if (voteUpReact.hasClass('selected') == true) {
      voteUpReact.removeClass('selected');
      voteDownReact.addClass('selected');
    } else
      voteDownReact.removeClass('selected');
  });

  replyReact.click(e => {
    e.preventDefault();

    if (replyReact.hasClass('selected') == false)
      replyReact.addClass('selected');
    else
      return;
  });
});