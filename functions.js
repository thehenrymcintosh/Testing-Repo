window.onload = addlisteners;

function addlisteners() {

  $(".me").hover(function(){
    $(".me-container span" ).toggleClass( "hover" );
    });
    $(".au").hover(function(){
      $(".au-container span" ).toggleClass( "hover" );
      });
      $(".uk").hover(function(){
        $(".uk-container span" ).toggleClass( "hover" );
        });
        $(".sea").hover(function(){
          $(".sea-container span" ).toggleClass( "hover" );
          });
}
