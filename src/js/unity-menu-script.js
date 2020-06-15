/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context, settings) {
      $('#main-menu').find('.expanded').once('has-submenu').each(function () {
        $(this).children('a').attr('aria-expanded', 'false');
        $(this).children('a').attr('aria-haspopup', 'true');
        $(this).children('a').append('<span class="fas fa-caret-down"></span>');

        var $menuLink = $(this).children('a');
        var clickHandler = function (e) {
          e.preventDefault();
          $menuLink.attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
          });
          $menuLink.parent('.expanded').toggleClass('open');
          $(this).parent('.expanded').siblings().removeClass('open');
          $(this).parent('.expanded').siblings().children('.menu-link').attr('aria-expanded', 'false');
          $(this).parent('.expanded').siblings().children('ul').removeAttr('style');
        };

        $menuLink.on('click', clickHandler);
      });

      if ($(window).width() > 766) {
        $('#main-menu .menu-item').mouseenter(function () {
          $(this).children('ul').css('display', 'block');
        });
        $('#main-menu .menu-item').mouseleave(function () {
          var $this = $(this);
          if (!$this.hasClass('open')) {
            setTimeout(function () {
              $this.children('ul').css('display', 'none');
            }, 200);
          }
        });
      }
    }
  }
})(jQuery, Drupal);
