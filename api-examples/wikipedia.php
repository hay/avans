<?php
    // Documentatie vind je hier: http://nl.wikipedia.org/w/api.php
    $url = "http://nl.wikipedia.org/w/api.php?action=help";
    $data = file_get_contents($url);
    echo $data;