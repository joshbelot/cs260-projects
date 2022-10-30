/* eslint no-undef: "off"*/
/* eslint no-unused-expressions: "off"*/
/* eslint no-restricted-globals: "off"*/
$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
  };
  
  // Call the functions 
  magnifPopup();

});