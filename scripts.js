//Ajax links
$( ".ajax-link" ).on( "click", function(event) {
  event.preventDefault();
  
  $('.homeContentWrap').fadeOut();
  
  $('.homeContentWrap .content p').addClass("hidden");
  $(".ajax-link").removeClass("active");
  $(this).addClass("active");  
    
  var href = $(this).attr("href");
  var hrefShort = href.replace('.html','');
  var href = href+'.html'

  
  window.history.pushState("", "", hrefShort);

  
  $.get(href, function(html){
     $(".ajax-wrapper").load(href + " .loadme", function(){
       if ( typeof window.instgrm !== 'undefined' ) {
           window.instgrm.Embeds.process();
           twttr.widgets.load();
       }
       
       if ( typeof DISQUS !== 'undefined' ) {
            DISQUS.reset({
              reload: true
            });
        }
       
       $(".ajax-wrapper").fadeIn(1500);
       $(".intro").addClass("selected");
     });
  });
  
});

// Hover links

$(document).on("mouseenter", ".intro:not(.selected) .ajax-link", function() {
    $('.homeContentWrap .content p').addClass("hidden");
    $(".ajax-link").removeClass("active");
    $(this).addClass("active");   
});

$(document).on("mouseleave", ".intro:not(.selected) .ajax-link", function() {
    $('.homeContentWrap .content p').removeClass("hidden"); 

});

//Close links
$(document).on("click", '.close', function(event) { 
  
  if ($(window).width() >= 900) {
    event.preventDefault();
    $(".ajax-wrapper").fadeOut();
    $('.homeContentWrap .content p').removeClass("hidden");
    $(".intro").removeClass("selected");
  }

});
