<?php
    ini_set('display_errors', 1);
    $url = "https://nl.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Categorie:Rijksmonument%20in%20%27s-Hertogenbosch&cmlimit=100&format=json";
    $data = file_get_contents($url);
    $json = json_decode($data);

    echo "<ul>";
    foreach($json->query->categorymembers as $category) {
        echo "<li>" . $category->title . "</li>";
    }
    echo "</ul>";