/**
 * example.js is just to demonstrate how the plugin works.
 */

$(function(){
    $('.main .btn-display').click(function(){
        var popup = new _Popup({
            // Popup title
            title   : 'Responsive Bootstrap popup example',
            // FontAwesome icon
            icon    : 'info',
            // Popup action buttons
            buttons : [
                {
                    type : 'primary',   // mandatory -> style
                    text : 'Close',     // mandatory -> button text
                    icon : 'times',     // optional -> button inside icon
                    close : true        // optional -> if TRUE it close the popup; otherwise not
                }
            ]
        });
        console.debug('popup', popup);
        var body = popup.create();
        $(body).html('popup body here');
    });
});