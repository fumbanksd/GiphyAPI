$(document).ready(function(){
  var start, limit;

  
  window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
  
  $('#searchBar').off();
  $('#searchBar').keyup(function(){
    start = 20;
    var searchTerm = $('#searchBar').val();
    
    if(searchTerm !== '') {
      var url = 'https://api.giphy.com/v1/gifs/search?&q='+searchTerm+'&limit=100&api_key=dc6zaTOxFJmzC';
    }
   
    $('#results').empty();
    $('#load').text('Load More').css('opacity','1');
    
    if($('#searchBar').val() === '') {
     $('#load').hide();
    } else {
      setTimeout(function() {
         $('#load').show();
      },1000);
     
    }
     
 