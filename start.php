<?php

Autoloader::map(array('FancyBox' => __DIR__.'/fancybox.php'));

Asset::container('fancybox')->bundle('fancybox');

// UN-COMMENT LINE BELOW IF YOU DO NOT HAVE JQUERY LOADED!
//Asset::container('fancybox')->add('jquery','js/jquery-1.7.1.min.js');

Asset::container('fancybox')->add('fancybox','jquery.fancybox-1.3.4.pack.js');
Asset::container('fancybox')->add('fancybox2','fancybox.js');

// UN-COMMENT for jQuery easing support
// Asset::container('fancybox')->add('fancybox3','jquery.easing-1.3.pack.js');

// UN-COMMENT for mousewheel support in galleries
// Asset::container('fancybox')->add('fancybox4','jquery.mousewheel-3.0.4.pack.js');

Asset::container('fancybox')->add('fancybox5','jquery.fancybox-1.3.4.css');