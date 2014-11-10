(function ($, global) {

  var App = function ( conf ) {
    this.conf = $.extend({
      container: '.gallery',
      lazyload: true,

      // Extra options
      init: true
    }, conf || {});

    this.width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.ratio = window.devicePixelRatio;

    if (this.conf.init !== false) {
      this.initialize();
    }
  };

  App.prototype.initialize = function () {
    if (this.conf.lazyload) {
      this.lazyload();
    }

    if (this.width > 767) {
      this.avgrund.initialize(this);
      this.isotope();
    }

    if (this.ratio > 1) {
      this.retina.initialize();
    }
  };

  App.prototype.isotope = function () {
    var $container = $(this.conf.container);

    $container.isotope({
      itemSelector: '.gallery__item',
      masonry: {
        columnWidth: 410
      }
    });

    $('.filters > li').on('click', function (event) {
      $container.isotope({
        filter: $(this).attr('data-filter')
      });
    });
  };

  App.prototype.avgrund = {};

  App.prototype.avgrund.initialize = function ( context ) {
    $('.gallery__item').on('click', $.proxy(function (event) {
      var $requested = $(event.target);
      this.open(context.retina.check2x($requested.attr('src')), $requested.attr('alt'));
    }, this));

    $('.avgrund-popup__close').on('click', $.proxy(function () {
      this.close();
    }, this));
  };

  App.prototype.avgrund.open = function ( src, alt ) {
    $('.avgrund-popup__image').attr({
      'src': src,
      'alt': alt
    });

    global.Avgrund.show('.avgrund-popup');
  };

  App.prototype.avgrund.close = function () {
    global.Avgrund.hide();

    $('.avgrund-popup__image').attr({
      'src': 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      'alt': ''
    });
  };

  App.prototype.lazyload = function () {
    $('.gallery__image.lazy').removeClass('lazy').lazyload({
      effect: 'fadeIn',
      threshold: 200,
      failure_limit: 10
    });
  };

  App.prototype.retina = {};

  App.prototype.retina.initialize = function () {
    $('.gallery__image').each($.proxy(function (index, element) {
      var $current = $(element);
      var src = $current.attr('src');
      var original = $current.attr('data-original');

      if (src.substr(0, 4) !== 'data') {
        $current.attr('src', this.check2x(src));
      }

      else if (original !== null && original.substr(0, 4) !== 'data') {
        $current.attr('data-original', this.check2x(original));
      }
    }, this));
  };

  App.prototype.retina.check2x = function ( path ) {
    var fileName = path.substr(0, path.lastIndexOf('.'));

    return fileName.substr(-3) !== "@2x"
         ? fileName + "@2x" + path.substr(path.lastIndexOf('.'))
         : path ;
  };

  global.App = App;

}(window.jQuery, window));
