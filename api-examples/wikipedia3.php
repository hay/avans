<?php
    ini_set('display_errors', 1);

    $category = "Rijksmonument in 's-Hertogenbosch";

    $api = "http://nl.wikipedia.org/w/api.php?";

    $params = array(
        "action" => "query",
        "list" => "categorymembers",
        "cmtitle" => "Category:" . $category,
        "cmlimit" => 50,
        "format" => "json"
    );

    $urlargs = http_build_query($params);

    $url = $api . $urlargs;

    $data = file_get_contents($url);

    $json = json_decode($data);

    $titles = array();

    foreach ($json->query->categorymembers as $category) {
        array_push($titles, $category->title);
    }

    $params = array(
        "action" => "query",
        "prop" => "info",
        "titles" => implode("|", $titles),
        "format" => "json"
    );

    $urlargs = http_build_query($params);

    $url = $api . $urlargs;

    $data = file_get_contents($url);

    $json = json_decode($data);

    foreach ($json->query->pages as $page) {
        foreach ($page as $key) {
            echo '"' . $key . '";';
        }

        echo "\n";
    }