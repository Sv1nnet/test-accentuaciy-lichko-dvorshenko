$(document).ready(function(){
  $('.instructions-container').on('click', 'h1', function() {
    $('.instructions-container').toggleClass('active');
  });

  console.log('test index.js');
});