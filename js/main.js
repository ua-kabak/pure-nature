$(function () {
  $('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.nav__list').toggleClass('nav__list--active');
    $('.body').toggleClass('body--active');
  });

  $('.nav__link--mobile').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.nav__list').toggleClass('nav__list--active');
    $('.body').toggleClass('body--active');
  })


  $(".logo, .nav__link").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();
});