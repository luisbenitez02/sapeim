$(document).ready(function(){
  $('.button-collapse').sideNav('show');
// Hide sideNav
  $('.button-collapse').sideNav('hide');

  $('.button-collapse').sideNav({
      //menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      //closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
   );
});
