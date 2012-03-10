<?php

/**
 * FancyBox Bundle for Laravel
 *
 * @package  FancyBox
 * @version  1.0.0
 * @author   Gary Saunders <garysaunders1981@gmail.com>
 * @link     http://www.bookerthedog.com
 */

class FancyBox {

   // The standard template for a fancybox link
   public static $baselink = "<a class=\"iframe\" rel=\"fancybox_%s\" title=\"%s\" href=\"%s\">%s</a>";

   // Parses the given link and text into the baselink then returns it
   public static function html($link,$text,$profile='default',$title='')
   {
      return sprintf(self::$baselink,$profile,$title,$link,$text);
   }

}