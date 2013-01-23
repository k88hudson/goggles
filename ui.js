var currenturlel = document.querySelector( ".xg-current-url" );

var testdiv = document.querySelector( ".test-div" );

var xgcontainer = document.querySelector( ".xg-container" );
var input = document.querySelector( "textarea" );

currenturlel.innerHTML = window.location.href;

testdiv.addEventListener( "click", function( e ) {
  e.preventDefault();
  xgcontainer.classList.toggle( "collapsed" );
  input.value = this.innerText;
}, false );

input.addEventListener( "keyup", function(e) {
  testdiv.innerHTML = this.value;
}, false );

input.addEventListener( "focus", function(e) {
  testdiv.classList.add( "xg-editing" );
}, false );

input.addEventListener( "blur", function(e) {
  testdiv.classList.remove( "xg-editing" );
}, false );
