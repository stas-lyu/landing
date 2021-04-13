document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.reviews').carousel({ indicators: true });
    $('.comfort_carousel').carousel({ indicators: true, fullWidth: true, })
})
