$(document).ready(function() {
    function highlightBoxCard(location) {
        // Remove existing highlights and greyscale classes
        $('.box-card').removeClass('highlighted').addClass('greyscale');
        
        // Highlight the new box-card and remove greyscale
        $('#' + location).removeClass('greyscale').addClass('highlighted');

        // Scroll the parent div to make the highlighted box-card appear on top
        var target = $('#' + location);
        if (target.length) {
            $('.Service_text').animate({
                scrollTop: target.position().top + $('.Service_text').scrollTop() - $('.Service_text').position().top
            }, 600); // Adjust the duration as needed
        }
    }

    $('.dot').hover(function() {
        var location = $(this).attr('class').split(' ')[1];
        highlightBoxCard(location);
    }, function() {
        // Keep highlighted card when hover out
        $('.box-card').not('.highlighted').addClass('greyscale');
    });

    $('.dot').click(function() {
        var location = $(this).attr('class').split(' ')[1];
        highlightBoxCard(location);
    });
});






