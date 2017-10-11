// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);

// A caption
$overlay.append($caption);

// Add overlay
$("body").append($overlay);
// An image

// Capture the click event on a link to an image
$("#imageGallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    // Update overlay with a the image linked in the link
    $image.attr("src", imageLocation);

    // Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    // Show the overlay
    $overlay.show();


});

// When overlay is clicked
    // Hide the overlay
$overlay.click(function () {
    $overlay.hide();
})

