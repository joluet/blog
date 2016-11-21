//= require_self

// Initialize fluidbox

jQuery(function() {
    jQuery('.fluidbox-trigger').fluidbox();
})

// Share button
$(document).ready(function() {

    // Featured image loaded behavior
    $('.section-backgroundImage img').imagesLoaded()
        .done(function(instance) {
            $('.post-featuredImage').addClass('is-loaded');
        });

    // Modal toggle behavior
    $('.modal-toggle-wrapper').click(function() {
        $(this).toggleClass('active');
        $('.modal-toggle-bubble').toggleClass('active');
        $('.modal-toggle-bubbleShadow').toggleClass('active');
        $('.modal-toggle-close-wrapper').toggleClass('active');
        $('.fullscreenModal').toggleClass('active');
    });

    // Prevent default anchor event and make a share popup
    $.fn.sharePopup = function(e, intWidth, intHeight, blnResize) {

        e.preventDefault();
        intWidth = intWidth || '750';
        intHeight = intHeight || '500';
        strResize = (blnResize ? 'yes' : 'no');

        //// Set title and open popup with focus on it
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
    }

    $('.shareButton').on("click", function(e) {
        $(this).sharePopup(e);
    });
});

// Show modal toggle after scrolling 300px
$(document).scroll(function() {
    $('.modal-toggle-group').toggleClass('active', $(document).scrollTop() >= 300);
});
