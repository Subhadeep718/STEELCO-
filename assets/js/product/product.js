$(document).ready(function () {
    var $productCarousel = $("#my_product_info_carousel");
    var $productItems = $(".products-item");

    $productCarousel.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        onInitialized: syncHighlight, // Initial highlight sync
        onTranslated: syncHighlight
    });

    $productItems.hover(
        function () { // mouse enter
            $(this).addClass("highlight");
        },
        function () { // mouse leave
            $(this).removeClass("highlight");
        }
    );

    $productCarousel.hover(
        function () { // mouse enter
            $(this).addClass("highlight");
        },
        function () { // mouse leave
            $(this).removeClass("highlight");
        }
    );

    function syncHighlight(event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2 % $productItems.length;
        if (currentIndex < 0) {
            currentIndex = $productItems.length + currentIndex;
        }
        console.log("Syncing highlight for index:", currentIndex); // Debug statement
        $productItems.removeClass("highlight");
        $productItems.eq(currentIndex).addClass("highlight");
    }

    $productItems.eq(0).addClass("highlight");
});


