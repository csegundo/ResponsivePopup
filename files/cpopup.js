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
         * main configuration
         */
        props : {
            speed : 250
        },

        /**
         * @param {String} title: the title
         * @param {String} icon: the icon
         * @param {Number} speed: animation popup speed (default 250)
         * 
         * @returns popup wrapper
         */
        create : function(title, icon, speed){
            CPOPUP.props.speed = speed || CPOPUP.props.speed;
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
                CPOPUP.close(build.mainPopup);
            });
            // $(build.mainPopup).on('click', 'not(.popup-content)', function(){
            //     CPOPUP.close(build.mainPopup);
            // });

            return build.popupWrapper;
        },
    
        /**
         * @param {Object} wrapper: popup wrapper (returned value from create())
         */
        close : function(wrapper){
            var wp = wrapper.hasClass('cpopup') ? wrapper : wrapper.parents('.cpopup');
            wp.find('.popup-content').slideUp(CPOPUP.props.speed, function(){
                wp.animate({
                    opacity : 0 // blur effect
                }, {
                    complete : function(){
                        if(wrapper.hasClass('cpopup')){
                            wrapper.remove();
                        } else{
                            wrapper.parents('.cpopup').remove();
                        }
            
                        if($('body').find('.cpopup').length == 0){
                            $('body').css('overflow', 'auto');
                        }
                    }
                });
            });
        }
    };
});