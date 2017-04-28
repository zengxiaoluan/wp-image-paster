(function( $ ) {
    tinymce.create('tinymce.plugins.MyButtons', {
        init : function(ed, url) {
    /*        ed.addButton( 'button_eek', {
                title : 'Insert shortcode',
                image : '../wp-includes/images/smilies/icon_eek.gif',
                onclick : function() {
                    ed.selection.setContent('[shop_ip_address]');
                },
            });
            ed.addButton( 'button_green', {
                title : 'Add h1',
                image : '../wp-includes/images/smilies/icon_mrgreen.gif',
                cmd: 'button_green_cmd'
            });
            ed.addCommand( 'button_green_cmd', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<h1>' + selected_text + '</h1>';
                ed.execCommand('mceInsertContent', 0, return_text);

            } );*/
            ed.on( 'paste', function( event ){
                var items = (event.clipboardData || event.originalEvent.clipboardData).items;
                for (index in items) {
                    var item = items[index];
                    if (item.kind === 'file') {
                        var blob = item.getAsFile();
                        var reader = new FileReader();
                        reader.onload = function(event){
                            var return_text = '';
                            return_text = '<img src="' + event.target.result + '">';
                            ed.execCommand('mceInsertContent', 0, return_text);
                        };
                        reader.readAsDataURL(blob);
                    }
                }
            } );
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add( 'imagepaster', tinymce.plugins.MyButtons );
})( jQuery );