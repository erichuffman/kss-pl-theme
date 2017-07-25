!(function ($) {
  'use strict';

  var $menuLinks = $('.kss__menu-list-item a');

  var $contentFrame = $('.kss-layout__content-frame');

  $menuLinks.on('click', function(event) {
    $contentFrame.attr('src', $(this).attr('href'));
    event.preventDefault();
  });

})(jQuery);
