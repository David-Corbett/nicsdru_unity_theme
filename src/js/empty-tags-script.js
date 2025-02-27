/**
 * @file
 * A simple script to remove empty tags, in particular 'p' tags from the page.
 */

// eslint-disable-next-line
(function ($) {
  Drupal.behaviors.nicsOriginsRemoveEmptyTags = {
    attach: function attach(context) {
      $('p', context)
        .once('emptyTags')
        // eslint-disable-next-line
        .filter(function () {
          return (
            $.trim(
              $(this)
                .html()
                // eslint-disable-next-line
                .replace(/&nbsp;/g, '')) === ''
          );
        })
        .remove();
    },
  };
})(jQuery);
