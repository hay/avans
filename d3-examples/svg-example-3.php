<?php
  $type = $_GET['type'];

  if ($type == "circle") {
    $type = "circle";
  } else {
    $type = "rect";
  }
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style>
        #chart div {
            height: 50px;
            background: red;
            margin-bottom: 5px;
        }
    </style>
    <script>
      TYPE = '<?php echo $type; ?>';
    </script>
</head>
<body>
  <a href="?type=circle">Circle</a>
  <a href="?type=rect">Rect</a>

  <button>Groter jonguh</button>

  <svg width="500px" height="500px">
    <?php echo file_get_contents("$type.svg"); ?>
  </svg>

    <script src="lib/d3.js"></script>
    <script>
      var data = [10, 40, 20, 30];

      function draw() {
        var shapes = d3.selectAll(TYPE)
          .data(data)
          .transition()

        if (TYPE === 'circle') {
          shapes.attr('opacity', function(d) { return 1-( (1 / d) * 10); })
          shapes.attr('r', function(d) { return d; });
        } else {
          shapes.attr('width', function(d) { return d; });
        }
      }

      d3.select('button').on('click', function() {
        data = data.map(function(d) {
          return d * 2;
        });

        draw();
      });

      draw();
    </script>
</body>
</html>