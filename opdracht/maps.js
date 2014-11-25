function maps() {
    var csv = d3.dsv(';');

    function draw(element, data) {
        var values = d3.entries(data).map(function(d) {
            return parseFloat(d.value);
        });

        var scale = d3.scale.linear()
            .domain([0, d3.max(values)])
            .range([0, 1]);

        d3.select(element).selectAll('path').attr('fill', '#CC333F');

        for (var province in data) {
            var value = parseFloat(data[province]);
            d3.select(element + ' #' + province).attr('opacity', scale(value));
        }
    }

    d3.xhr('provinces.svg', function(error, response) {
        var svg = response.responseXML.querySelector('svg').outerHTML;
        d3.select('#map1 .map').html(svg);
        d3.select('#map2 .map').html(svg);

        csv('bikeShops.csv', function(err, data) {
            draw('#map1', data[0] );
        });

        csv('provinces.csv', function(err, data) {
            draw('#map2', data[0] );
        });
    });
}