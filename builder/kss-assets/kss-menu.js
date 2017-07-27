!(function ($) {
  'use strict';

  // Section links.
  var $sLinks = $('.kss-menu__list-item--section > .kss-menu__list-item-link');

  // Page links.
  var $pLinks = $('.kss-menu__list-item--page > .kss-menu__list-item-link');

  // Content iframe.
  var $cFrame = $('.kss-layout__content-frame');

  // Content wrapper for homepage content.
  var $hContent = $('.kss-layout__main--home > .kss-layout__content-wrapper');

  // Menu toggle button.
  var $menuToggle = $('.kss-menu__toggle');

  // Breakpoint menu button.
  var $bpLink = $('.kss-breakpoint-menu__button');

  $sLinks.on('click', function(event) {
    var $self = $(this);
    var $childMenu = $self.find('+ .kss-menu__list--child');
    if ($self.hasClass('kss-open')) {
      $self.removeClass('kss-open');
      $self.attr('aria-expanded', 'false');
      $childMenu.attr('aria-hidden', 'true');
    }
    else {
      $sLinks.removeClass('kss-open');
      $self.addClass('kss-open');
      $self.attr('aria-expanded', 'true');
      $childMenu.attr('aria-hidden', 'false');
    }
    event.preventDefault();
  });

  $pLinks.on('click', function(event) {
    var $self = $(this);
    var $parentMenu = $self.parents('.kss-menu__list--child');
    var $parentTrigger = $parentMenu.siblings('.kss-menu__list-item-link');
    var $bpMenu = $bpLink.parents('.kss-breakpoint-menu');
    // Active/update iframe src.
    $cFrame.attr('src', $self.attr('href'));
    $cFrame.addClass('kss-active');
    $cFrame.parent().addClass('kss-active');
    // Hide index page content if not already hidden.
    if (!$hContent.hasClass('kss-inactive')) {
      $hContent.addClass('kss-inactive');
    }
    // Reveal breakpoint menu if not already visible.
    if (!$bpMenu.hasClass('kss-active')) {
      $bpMenu.addClass('kss-active');
    }
    // Remove open class from main menu toggle.
    $menuToggle.removeClass('kss-open');
    // Remove active class from all section menu links.
    $sLinks.removeClass('kss-active');
    // Update section link/menu.
    $parentMenu.attr('aria-hidden', 'true');
    $parentTrigger.removeClass('kss-open');
    $parentTrigger.addClass('kss-active');
    $parentTrigger.attr('aria-expanded', 'false');
    // Remove active class from all page links.
    $pLinks.removeClass('kss-active');
    // Set active class to current page link.
    $self.addClass('kss-active');
    // Prevent default link behavior.
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
