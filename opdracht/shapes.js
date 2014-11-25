function shapes() {
    var rect = d3.select('#shapes rect');
    var circle = d3.select('#shapes circle');
    var polygon = d3.select('#shapes polygon');

    function animate() {
        if (counter % 2 === 0) {
            rect.transition().duration(500).attr('width', 50);
            circle.transition().duration(500).attr('fill', '#FF8000');
            polygon.transition().duration(500).attr('transform', 'rotate(60, 689, 80)');
        } else {
            rect.transition().duration(500).attr('width', 156);
            circle.transition().duration(500).attr('fill', '#cc333f');
            polygon.transition().duration(500).attr('transform', 'rotate(0, 689, 80)');
        }

        counter++;
        setTimeout(animate, 2000);
    }

    var counter = 0;
    animate();
}