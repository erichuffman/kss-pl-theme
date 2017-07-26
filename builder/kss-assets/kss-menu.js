!(function ($) {
  'use strict';

  // Section links.
  var $sLinks = $('.kss__menu-list-item--section > .kss__menu-list-item-link');

  // Page links.
  var $pLinks = $('.kss__menu-list-item--page > .kss__menu-list-item-link');

  // Content iframe.
  var $cFrame = $('.kss-layout__content-frame');

  // Content wrapper for homepage content.
  var $hContent = $('.kss-layout__main--home > .kss-layout__content-wrapper');

  // Menu toggle button.
  var $menuToggle = $('.kss__menu-toggle');

  // Breakpoint menu button.
  var $bpLink = $('.kss__breakpoint-menu-button');

  $sLinks.on('click', function(event) {
    var $self = $(this);
    if ($self.hasClass('kss-open')) {
      $self.removeClass('kss-open');
    }
    else {
      $sLinks.removeClass('kss-open');
      $self.addClass('kss-open');
    }
    event.preventDefault();
  });

  $pLinks.on('click', function(event) {
    var $self = $(this);
    $pLinks.removeClass('kss-active');
    $cFrame.attr('src', $self.attr('href'));
    $cFrame.addClass('kss-active');
    $cFrame.parent().addClass('kss-active');
    $self.addClass('kss-active');
    $self.parents('.kss__menu-list--child')
      .siblings('.kss__menu-list-item-link').removeClass('kss-open');
    $menuToggle.removeClass('kss-open');
    if (!$hContent.hasClass('kss-inactive')) {
      $hContent.addClass('kss-inactive');
    }
    event.preventDefault();
  });

  $menuToggle.on('click', function(event) {
    $(this).toggleClass('kss-open');
  });

  $bpLink.on('click', function(event) {
    var $self = $(this);
    $bpLink.removeClass('kss-active');
    $self.addClass('kss-active');
    var bpValue = $self.data('bp-value');
    if (bpValue === 'full') {
      $cFrame.css('width', '100%');
    }
    else {
      $cFrame.css('width', bpValue);
    }
    event.preventDefault();
  });

})(jQuery);
