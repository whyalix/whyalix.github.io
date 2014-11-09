var Avgrund = (function(){

	var container = document.documentElement,
		popup = document.querySelector( '.avgrund-popup-animate' ),
		cover = document.querySelector( '.avgrund-cover' ),
		currentState = null;

	container.className = container.className.replace( /\s+$/gi, '' ) + ' avgrund-ready';

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if( event.keyCode === 27 ) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick( event ) {
		if( event.target === cover ) {
			deactivate();
		}
	}

	function activate( state ) {
		addEvent( 'keyup', document, onDocumentKeyUp );
		addEvent( 'click', document, onDocumentClick );
		addEvent( 'touchstart', document, onDocumentClick );

		removeClass( popup, currentState );
		addClass( popup, 'no-transition' );
		addClass( popup, state );

		setTimeout( function() {
			removeClass( popup, 'no-transition' );
			addClass( container, 'avgrund-active' );
		}, 0 );

		currentState = state;
	}

	function deactivate() {
		removeEvent( 'keyup', document, onDocumentKeyUp );
		removeEvent( 'click', document, onDocumentClick );
		removeEvent( 'touchstart', document, onDocumentClick );

		removeClass( container, 'avgrund-active' );
		removeClass( popup, 'avgrund-popup-animate')
	}

	function disableBlur() {
		addClass( document.documentElement, 'no-blur' );
	}

	function addClass( element, name ) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass( element, name ) {
		element.className = element.className.replace( name, '' );
	}

	function show(selector){
		popup = document.querySelector( selector );
		addClass(popup, 'avgrund-popup-animate');
		activate();
		return this;
	}

	function hide() {
		deactivate();
	}

	function addEvent(evnt, elem, func) {
	    if (elem.addEventListener)
	    	elem.addEventListener(evnt, func, false);
	    else if (elem.attachEvent)
	    	elem.attachEvent("on" + evnt, func);
	    else
	    	elem[evnt] = func;
	}

	function removeEvent(evnt, elem, func) {
		if (elem.removeEventListener) 
	    	elem.removeEventListener (evnt, func, false);
		if (elem.detachEvent)
	    	elem.detachEvent('on' + evnt, func); 
	}

	return {
		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur,
		show: show,
		hide: hide
	}

})();