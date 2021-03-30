/**
 * example.js is just to demonstrate how the plugin works.
 */

$(function(){
    $('.main .btn-display').click(function(){
        // var popup -> the CPOUP instance wrapper
        var popup = CPOPUP.create('Responsive popup example', 'info');

        // MANDATORY -> popup content skeleton
        // For reasons of speed, the code is added as a string, but they can be tamplates, for example.
        var _template = `
        <div class="popup-body">
            This is the popup content filled with Lorem Ipsum:
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam modi debitis amet quisquam omnis. Architecto ipsam nam blanditiis excepturi delectus corrupti expedita debitis. Iusto veniam quam repellendus excepturi vitae id ab accusantium iure expedita? Ducimus labore inventore, mollitia est numquam neque eveniet deleniti unde quidem harum culpa repudiandae ex quo!
            </div>
        </div>
        <div class="popup-actions">
            <button class="btn btn-primary btn-sm bt_popup">Embed popup! <i class="fa fa-external-link"></i></button>
            <button class="btn btn-secondary btn-sm bt_close">Close popup <i class="fa fa-times"></i></button>
        </div>
        `;

        popup.html(_template);

        popup.find('.bt_close').click(function(){
            CPOPUP.close(popup);
        });

        popup.find('.bt_popup').click(function(){
            var _anotherPopup = CPOPUP.create('Embed popup (without icon)');
            _anotherPopup.html(`
            <div class="popup-body">
                Another embed popup! Insert many popups as you want!
            </div>
            <div class="popup-actions">
                <button class="btn btn-secondary btn-sm bt_close">Close popup <i class="fa fa-times"></i></button>
            </div>
            `);

            _anotherPopup.find('.bt_close').click(function(){
                if(confirm('Close embed popup?')){
                    CPOPUP.close(_anotherPopup); 
                }
            });
        });
    });
});