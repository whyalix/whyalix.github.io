$(function(){

  var $container = $('.gallery');
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  $container.isotope({
    itemSelector : '.gallery__item',
    masonry : {
      columnWidth : 410
    }
  });

  $('.filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

  if(width > 767) {
    $('.gallery__item').on('click', function() {
      var $requested = $(this).find('.gallery__image');
      openDialog($requested.attr('src'), $requested.attr('alt'));
    });
  }

  $('.gallery__image').lazyload({
    effect: 'fadeIn',
    threshold: 200,
    failure_limit : 10
  })

});

function openDialog(src, alt) {
  var fragments = src.split('.'),
    path = (fragments[0].slice(-3) == "@2x"
        ? fragments[0] +    '.' + fragments[1]
        : fragments[0] + '@2x.' + fragments[1]);
  var $image = $('.avgrund-popup__image');

  $image.attr({
    'src': path,
    'alt':alt
  });

  Avgrund.show('.avgrund-popup');
}

function closeDialog() {
  Avgrund.hide();

  $('.avgrund-popup__image').attr({
    'src': 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    'alt': ''
  });
}

function check2x(path) {
  var fileName = path.substr(0, path.lastIndexOf('.'));
  return fileName.substr(-3) !== "@2x"
       ? fileName + "@2x" + path.substr(path.lastIndexOf('.'))
       : path ;
}

var retina = window.devicePixelRatio > 1;

if (retina) {
  var img = document.getElementsByTagName('img');

  for(var i = 0, len = img.length; i < len; i++) {

    var current  = img[i],
        src      = current.getAttribute('src'),
        original = current.getAttribute('data-original');

    if (src.substr(0, 4) !== 'data') {
      current.setAttribute('src', check2x(src));
    }

    else if (original !== null && original.substr(0, 4) !== 'data') {
      current.setAttribute('data-original', check2x(original));
    }
  }
}
