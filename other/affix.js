var $h1 = $("h1");
var heights = [];

$("h1").each(function(index, element) {
    var position = $(element).position();
    heights.push(position.top);
});

$("button").on('click', function() {
    alert(42);
});

$(window).on('scroll', function() {
    if (window.scrollY > heights[1]) {
        $("#hoofdstuk2-index").css('background', 'red');
    } else {
        $("#hoofdstuk2-index").css('background', 'inherit');
    }

    $("#tellertje").text(window.scrollY);
})

console.log(heights);