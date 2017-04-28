<?php
/*
Plugin Name: Image Paster
Plugin URI:  http://zengxiaoluan.com/image-paster
Description: 截图、粘贴、图片就在你的眼前。
Version:     1.0
Author:      zengxiaoluan
Author URI:  http://zengxiaoluan.com/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: image-paster
Domain Path: /languages
*/

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'admin_init', 'image_paster' );
function image_paster() {
    add_filter( 'mce_buttons', 'my_register_tinymce_button' );
    add_filter( 'mce_external_plugins', 'mce_plugins' );
}

function my_register_tinymce_button( $buttons ) {
    array_push( $buttons, "button_eek", "button_green" );
    return $buttons;
}

function mce_plugins( $plugins ) {
    $plugins['imagepaster'] = plugins_url( '', __FILE__ ) . '/js/image-paster.js';
    return $plugins;
}

?>