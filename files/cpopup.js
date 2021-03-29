/**
 * ResponsivePopup by csegundo
 * cpopup.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/ResponsivePopup)
 */

console.log("%c ✔ cpopup.js loaded succesfully! ✔","background-color:#C2D5A7;color:#000;border:1px solid #B2C596;border-radius:3px;padding:3px;");

class _Popup{

    /**
     * @param {Object} settings: JSON with the main popup config
     */
    constructor(settings){
        this.title      = settings.title || 'Popup info.';
        this.icon       = settings.icon || '';
        this.buttons    = settings.buttons || [];
    }

    create(){
        var build = {};

        if(this.icon){
            build.icon = this.icon;
        }

        if(this.buttons.length < 1){
            this.buttons.push({ type : 'primary', text : 'Close', icon : 'times', close : true });
        }

        build.buttons = [];
        $.each(this.buttons, function(i, btn){
            build.buttons.push($('<button class="btn btn-' + btn.type + '">' + (btn.text || '') + ' ' + (btn.icon ? '<i class="fa fa-' + btn.icon + '"></i>' : '') + '</button>'));
        });

        build.mainPopup = $('<div class="cpopup"></div>');
        this.wrapper = build.mainPopup;
        build.popupContent = $('<div class="popup-content"></div>');
        build.popupHeader = $('<div class="popup-header"></div>');
        $(build.popupHeader).html($('<span class="title">' + (this.icon ? '<i class="fa fa-' + this.icon + '"></i>' : '') + this.title + '</span>'));
        $(build.popupHeader).append($('<span class="popup-close"><i class="fa fa-times"></i></span>'));
        build.popupBody = $('<div class="popup-body"></div>');
        this.body = build.popupBody;
        build.popupFooter = $('<div class="popup-actions"></div>');
        this.footer = build.popupFooter;

        $.each(build.buttons, function(i, btn){
            $(build.popupFooter).append(btn);
        });

        $('body').css('overflow', 'hidden');
        $('body').append(build.mainPopup);
        $(build.mainPopup).html(build.popupContent);
        $(build.popupContent).html(build.popupHeader);
        $(build.popupContent).append(build.popupBody);
        $(build.popupContent).append(build.popupFooter);

        console.log(build.popupHeader);
        $(build.popupHeader).on('click', '.popup-close', function(){
            $(this.wrapper).remove();
        });

        delete(this.buttons);
        return this.body; // Returns the popup body to fill it
    }

    close(){
        $(this.wrapper).remove();

        if($('body').find('.cpopup').length == 0){
            $('body').css('overflow', 'auto');
        }
    }
}
