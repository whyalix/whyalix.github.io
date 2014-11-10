UGLIFY = node_modules/uglify-js/bin/uglifyjs

all: min

min: assets/js/main.min.js

assets/js/main.min.js: \
	assets/js/vendors/avgrund.min.js \
	assets/js/vendors/modernizr.min.js \
	assets/js/vendors/jquery.isotope.min.js \
	assets/js/vendors/jquery.lazyload.min.js \
	assets/js/main.js
	cat $^ | $(UGLIFY) > $@
