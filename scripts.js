//Ajax links
$( ".ajax-link" ).on( "click", function(event) {
  event.preventDefault();
  
  $( ".ajax-wrapper" ).scrollTop(0);
  
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
       
       $(".ajax-wrapper").fadeIn(500);
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
  
  if ($(window).width() >= 1024) {
    event.preventDefault();
    $(".ajax-wrapper").fadeOut();
    $('.homeContentWrap .content p').removeClass("hidden");
    $(".intro").removeClass("selected");
  }

});

//sidebar
function openNav() {
  document.getElementById("mySidenav").style.marginLeft = "77.85vw";
  document.getElementById("menu").style.marginRight = "20.7vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.marginLeft = "100vw";
  document.getElementById("menu").style.marginRight= "0";
}