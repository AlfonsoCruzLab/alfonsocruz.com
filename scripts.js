// Ajax links
$(document).on("click", ".ajax-link", function(event) {
  event.preventDefault();
  
  $(".ajax-wrapper").scrollTop(0);
  $('.homeContentWrap').fadeOut();
  $('.homeContentWrap .content p').addClass("hidden");
  $(".ajax-link").removeClass("active");
  $(this).addClass("active");
  
  var href = $(this).attr("href") + '.html';
  var hrefShort = $(this).attr("href").replace('.html', '');
  
  window.history.pushState("", "", hrefShort);

  $.get(href, function(html) {
    $(".ajax-wrapper").load(href + " .loadme", function() {
      if (typeof window.instgrm !== 'undefined') {
        window.instgrm.Embeds.process();
        twttr.widgets.load();
      }
      
      if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({
          reload: true
        });
      }
      
      $(".ajax-wrapper").fadeIn(500);
      $(".intro").addClass("selected");
    }).fail(function() {
      // Handle AJAX load failure
      console.error("Failed to load content.");
    });
  });
});


// Hover links
$(document).on("mouseenter mouseleave", ".intro:not(.selected) .ajax-link", function(event) {
  if (event.type === "mouseenter") {
    $('.homeContentWrap .content p').addClass("hidden");
    $('.contact').addClass("hidden");
    $('.button').removeClass("highlight");
    $(this).addClass("highlight");
  } else {
    $('.homeContentWrap .content p').removeClass("hidden");
    $('.contact').removeClass("hidden");
    $('.button').addClass("highlight");
  }
});

// Close links
$(document).on("click", '.close', function(event) {
  if ($(window).width() >= 1024) {
    event.preventDefault();
    $(".ajax-wrapper").fadeOut();
    $('.homeContentWrap .content p').removeClass("hidden");
    $(".intro").removeClass("selected");
    $('.contact').removeClass("hidden");
  }
});


// background randomiser
document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    let backgroundClass = '';
    
    // Calculate cell dimensions
    const cellWidth = width / 5;
    const cellHeight = height / 5;
    
    // Determine the cell position
    const cellX = Math.floor(x / cellWidth); // Column index (0 to 4)
    const cellY = Math.floor(y / cellHeight); // Row index (0 to 4)
    
    // Function to calculate the background class based on cell position
    const getBackgroundClass = (x, y) => {
        const cellIndex = cellY * 5 + cellX; // Convert 2D grid index to 1D index
        
        switch (cellIndex) {
            case 0: return 'ftt';   // Top-left corner
            case 1: return 'wah';   // Top row, second column
            case 2: return 'tm';    // Top row, third column
            case 3: return 'ex';    // Top row, fourth column
            case 4: return 'eco';   // Top-right corner
            case 5: return 'eco';   // Top-right corner
			case 6: return 'ftt';   // Second row, first column
            case 7: return 'wah';   // Second row, second column
            case 8: return 'tm';    // Second row, third column
            case 9: return 'ex';    // Second row, fourth column
			case 10: return 'ex';    // Second row, fourth column
            case 11: return 'eco';   // Second row, fifth column
            case 12: return 'ftt';  // Third row, first column
            case 13: return 'wah';  // Third row, second column
            case 14: return 'tm';   // Third row, third column
			case 15: return 'tm';   // Third row, third column
            case 16: return 'ex';   // Third row, fourth column
            case 17: return 'eco';  // Third row, fifth column
            case 18: return 'ftt';  // Fourth row, first column
            case 19: return 'wah';  // Fourth row, second column
			case 20: return 'wah';  // Fourth row, second column
            case 21: return 'tm';   // Fourth row, third column
            case 22: return 'ex';   // Fourth row, fourth column
            case 23: return 'eco';  // Fourth row, fifth column
            case 24: return 'ftt';  // Fifth row, first column
            default: return 'ftt';  // Default to 'eco' for out of bounds (shouldn't happen)
        }
    };
    
    backgroundClass = getBackgroundClass(x, y);
    
    const homepage = document.querySelector('.homepage');
    homepage.className = 'homepage'; // clear existing classes
    homepage.classList.add(backgroundClass); // add new background class
});


// fade out cover

document.querySelector('.ajax-wrapper').addEventListener('scroll', () => {
    const targetDiv = document.querySelector('.background-container');
    const ajaxWrapper = document.querySelector('.ajax-wrapper');
    const scrollPosition = ajaxWrapper.scrollTop;
    const halfViewportHeight = ajaxWrapper.clientHeight / 2;

    if (scrollPosition >= halfViewportHeight) {
        targetDiv.style.opacity = 0.2;
    } else {
        targetDiv.style.opacity = 1 - (0.8 * scrollPosition / halfViewportHeight);
    }
});