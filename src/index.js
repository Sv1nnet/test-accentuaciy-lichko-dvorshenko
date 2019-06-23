/* eslint-disable */
// import jQuery from 'jquery';
// window.$ = jQuery;
// window.jQuery = jQuery;
window.onload = function() {
  const overlay = $('.overlay');
  const toggleOverlayActive = function() {
    overlay.toggleClass('active');
  }
  const toggleClass = overlay.toggleClass;
  let currentOpenedElement;

  $('.not-specialist ul li').on('click', function(e) {
    e.preventDefault();
    toggleOverlayActive();
    const currentItemClass = '.' + this.classList + '-item';
    currentOpenedElement = $(currentItemClass);
    currentOpenedElement.toggleClass('active');
  });

  $('.overlay-bg').on('click', function(e) {
    toggleOverlayActive();
    currentOpenedElement.toggleClass('active');
  });

  $('.close-overlay').on('click', function() {
    toggleOverlayActive();
    currentOpenedElement.toggleClass('active');
  });

  $('.content-rollup-container a').on('click', function(e) {
    e.preventDefault();
    $(e.target.parentElement).toggleClass('active');
  });

  $('nav > ul > li > span').on('click', function(e) {
    const spec = $('.specialist');
    const notSpec = $('.not-specialist');

    if (e.target.parentElement === spec[0]) {
      spec.addClass('active');
      notSpec.removeClass('active');
    }
    else if (e.target.parentElement === notSpec[0]) {
      notSpec.addClass('active');
      spec.removeClass('active');
    }
  });

  console.log('main index.js');

};
