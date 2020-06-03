/* eslint-disable */
(function ($, Drupal) {
  $(document).ready(function ($) {
    $(window).resize(function() {
      if( ($(window).width() > 766)) {
        $('#main-menu').find('.expanded').each(function (index, el) {
          $(this).find('button').remove();
          if (!$(this).children('span').hasClass('menu-icon')) {
            var $linkText = $(this).children('.menu-title').html();
            $linkText = Drupal.t('Show submenu for ' + $linkText);
            $(this).append('<span class="menu-icon fas fa-caret-down"></span>' +
              '<span class="visually-hidden">' + $linkText + '</span>');
          }
        });
        $('#main-menu li').mouseenter(function() {
          $(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
        });
        $('#main-menu li').mouseleave(function() {
          $(this).children('ul').stop(true, true).fadeOut(250).css('display', 'block');
        })
      } else {
        $('#main-menu').find('.expanded').each(function (index, el) {
          $(this).find('.menu-icon').remove();
          if (!$(this).children('button').hasClass('ul-toggle')) {
            $(this).append('<button class="ul-toggle">+</button>');
          }
        });
        $('.drop-down-toggle').click(function() {
          $(this).parent().children('ul').slideToggle(250);
        });
      }
    });

    if ($(window).width() > 766) {
      $('#main-menu').find('.expanded').each(function (index, el) {
        var $linkText = $(this).children('.menu-title').html();
        $linkText = Drupal.t('Show submenu for ' + $linkText);
        $(this).append('<span class="menu-icon fas fa-caret-down"></span>' +
          '<span class="visually-hidden">' + $linkText + '</span>');
      });

      $('#main-menu .expanded').hover(
        function () {
          $(this).addClass('open');
          $(this).children('.menu-title').attr('aria-expanded', true);
          $(this).children('.menu-icon').removeClass('fa-caret-down').addClass('fa-caret-up');
        }, function () {
          $(this).removeClass('open');
          $(this).children('.menu-title').attr('aria-expanded', false);
          $(this).children('.menu-icon').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
      );

      $('.expanded').on('keypress', function (event) {
        event.stopImmediatePropagation();

        if ($(event.which == 13)) {
          $(this).toggleClass('open');
          $(this).children('.menu-title').attr('aria-expanded', function(i, attr) {
            return attr === 'true' ? 'false' : 'true';
          });
          $(this).children('.fas').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
          $(this).siblings('.open').children('.fa-caret-up').toggleClass('fa-caret-up').toggleClass('fa-caret-down');
          $(this).siblings('.open').toggleClass('open');
        }
        event.preventDefault();
      });
    } else {
      $('#main-menu').find('.expanded').each(function () {
        $(this).append('<button class="ul-toggle">+</button>');
      });

      $('.ul-toggle').on('click', function (event) {
        event.preventDefault();
        if ($(this).text() == '+') {
          $(this).text('-');
        } else {
          $(this).text('+');
        }
        $(this).siblings('.menu').toggleClass('collapse');
      });
    }

    $('.burger-toggle').click(function () {
      var target = $(this).attr('data-target');
      $(target).slideToggle(100, 'swing', function () {
        ($(this).hasClass('collapse')) ? $(this).removeClass('collapse') : $(this).addClass('collapse');
        $(this).removeAttr('style');
      });
    });
  });
})(jQuery, Drupal);

