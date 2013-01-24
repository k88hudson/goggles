var currenturlel = document.querySelector( ".xg-current-url" );

var testdiv = document.querySelector( ".test-div" );

var xgcontainer = document.querySelector( ".xg-container" );
var toggler = document.querySelector( ".xg-toggle-button" );
var textinput = document.querySelector( "[data-tab=text]" );
var hrefinput = document.querySelector( "[data-tab=href]" );

var treetabs = document.querySelector( ".xg-tree" );
var tabcontainer = document.querySelector( ".tab-container" );

currenturlel.innerHTML = window.location.host;

function showGoggles( e ) {
  e.preventDefault();
  xgcontainer.classList.toggle( "collapsed" );
  testdiv.classList.toggle( "xg-editing" );
  textinput.value = testdiv.innerHTML;
  hrefinput.value = testdiv.href;
}

testdiv.addEventListener( "click", showGoggles, false );
toggler.addEventListener( "click", showGoggles, false );

textinput.addEventListener( "keyup", function(e) {
  testdiv.innerHTML = this.value;
}, false );

textinput.addEventListener( "focus", function(e) {
  testdiv.classList.add( "xg-focus" );
}, false );

textinput.addEventListener( "blur", function(e) {
  testdiv.classList.remove( "xg-focus" );
}, false );

treetabs.addEventListener( "click", function(e) {
  var value = e.target.getAttribute( "data-value" );
  var currentselected = treetabs.querySelector( "[data-selected]" );
  var currentselectedtab = tabcontainer.querySelector( "[data-selected]" );
  if ( value ) {
    currentselected.removeAttribute( "data-selected" );
    currentselectedtab.removeAttribute( "data-selected" );
    e.target.setAttribute( "data-selected", true );
    tabcontainer.querySelector( "[data-tab=" + value + "]" ).setAttribute( "data-selected", true );
  }
}, false );
