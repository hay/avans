function shops() {
    var csv = d3.dsv(';');

    function createScale(data, maxWidth) {
        return d3.scale.linear()
            .domain([0, 520])
            .range([0, maxWidth])
    }

    function redrawShops(data) {
        var values = data.map(function(d) {
            return parseInt(d.value);
        });

        var scale = createScale(
            values,
            parseInt(d3.select('#shops').style('width'))
        );

        d3.select('#shops').selectAll('div')
            .data(data)
            .transition()
            .duration(1000)
            .style('width', function(d) {
                return scale(d.value) + 'px';
            })
            .text(function(d) {
                return d.key + ' (' + d.value + ')';
            })
    }

    function drawShops(data) {
        var values = data.map(function(d) {
            return parseInt(d.value);
        });

        var scale = createScale(
            values,
            parseInt(d3.select('#shops').style('width'))
        );

        d3.select('#shops').selectAll('div')
            .data(data)
            .enter()
            .append('div')
            .style('width', function(d) {
                return scale(d.value) + 'px';
            })
            .text(function(d) {
                return d.key + ' (' + d.value + ')';
            })
    }

    function loadBarChart(csvfile, drawType) {
        csv(csvfile, function(err, data) {
            data = d3.entries(data[0]);

            if (drawType === 'draw') {
                drawShops(data);
            } else {
                redrawShops(data);
            }
        });
    }

    d3.select('#animalshops').on('click', function() {
        loadBarChart('animalShops.csv', 'redraw');
    });

    d3.select('#jewelshops').on('click', function() {
        loadBarChart('jewelShops.csv', 'redraw');
    });

    d3.selectAll('#bikeshops').on('click', function() {
        loadBarChart('bikeShops.csv', 'redraw');
    });

    loadBarChart('animalShops.csv', 'draw');
}