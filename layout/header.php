<?php
    $name = 'FancyCompany';
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title><?php echo empty($pageTitle) ? $name : $pageTitle.' | '.$name; ?></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="favicon.png" /> <!-- 32x32 -->
        <meta name="application-name" content="<?php echo $name; ?>" />
        <meta name="msapplication-TileImage" content="graphics/tile.png" /> <!-- 558x558 -->
        <meta name="msapplication-TileImage" content="graphics/tile-wide.png" /> <!-- 558x270 -->
        <meta name="msapplication-square150x150logo" content="graphics/tile-150x150.png" />
        <meta name="msapplication-square310x310logo" content="graphics/tile-310x310.png" />
        <meta name="msapplication-square70x70logo" content="graphics/tile-70x70.png" />
        <meta name="msapplication-wide310x150logo" content="graphics/tile-310x150.png" />
        <meta name="msapplication-TileColor" content="#FF0000" />
        <link rel="apple-touch-startup-image" href="graphics/launch6.png" media="(device-width: 375px)" /> <!-- 750x1294 -->
        <link rel="apple-touch-startup-image" href="graphics/launch6plus.png" media="(device-width: 414px)" /> <!-- 1242x2148 -->
        <link rel="icon" sizes="any" mask href="graphics/pinned.svg" /> <!-- 1:1, transparent background, solid foreground color -->
        <meta name="theme-color" content="#000" /> <!-- foreground color for pinned.svg -->
        <link rel="icon" sizes="196×196" href="graphics/favicon-196x196.png" />
        <!-- apple-touch-icon-precomposed.png, 180x180 -->
        <style>
            <?php include('styles/css/base.css'); ?>
        </style>
        <link rel="stylesheet" media="screen, projection" href="styles/css/screen.css" />
        <link rel="stylesheet" media="print" href="styles/css/print.css" />
        <script src="scripts/vendor/modernizr.min.js"></script>
    </head>
    <body>