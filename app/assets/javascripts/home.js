$(document).ready(function(){
    $.get('/river-conditions', function(data) {
      var $content;
      $content = $('#content');
      $content.find('.pending-verdict').remove();
      return $content.append(data);
    });
});
