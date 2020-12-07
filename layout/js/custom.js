$(document).ready(function() {
    $('.portfolio-item a').hide();
    $(document).on("mouseenter", ".portfolio-item", function() {
        $(this).find('a').show();
    });
    $(document).on("mouseleave", ".portfolio-item", function() {
        $(this).find('a').hide();
    });
});
