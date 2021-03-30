/**
 * ResponsivePopup by csegundo
 * cpopup.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/ResponsivePopup)
 */

$(function(){
    console.log("%c ✔ cpopup.js loaded succesfully! ✔","background-color:#C2D5A7;color:#000;border:1px solid #B2C596;border-radius:3px;padding:3px;");
    
    window.CPOPUP = window.CPOPUP || {};
    window.CPOPUP = {
        /**
         * @param {String} title: the title
         * @param {String} icon: the icon
         */
        create : function(title, icon){
            title   = title || 'info.';
            icon    = icon  || '';

            var build = {};

            build.mainPopup     = $('<div class="cpopup"></div>');
            build.popupContent  = $('<div class="popup-content"></div>');
            build.popupHeader   = $('<div class="popup-header"></div>');
            build.popupWrapper  = $('<div class="popup-wrapper"></div>');

            $('body').css('overflow', 'hidden');
            $('body').append(build.mainPopup);
            $(build.popupHeader).html($('<span class="title">' + (icon ? '<i class="fa fa-' + icon + '"></i> ' : '') + title + '</span>'));
            $(build.popupHeader).append($('<span class="popup-close"><i class="fa fa-times"></i></span>'));
            $(build.mainPopup).html(build.popupContent);
            $(build.popupContent).html(build.popupHeader);
            $(build.popupContent).append(build.popupWrapper);

            $(build.popupContent).on('click', '.popup-close', function(){
                $(build.mainPopup).remove();
                if($('body').find('.cpopup').length == 0){
                    $('body').css('overflow', 'auto');
                }
            });

            return build.popupWrapper; // Returns the popup wrapper
        },
    
        /**
         * @param {Object} wrapper: popup wrapper (returned value from create())
         */
        close : function(wrapper){
            wrapper.parents('.cpopup').remove();
            if($('body').find('.cpopup').length == 0){
                $('body').css('overflow', 'auto');
            }
        }
    };
});