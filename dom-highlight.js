/**
 * @author Vitalii Ofat <i@vitaliy-ofat.com>
 */
!function($){
    $.fn.domHighlight = function(options) {

        options = $.extend({
            backdropBackground: 'rgba(0,0,0, .3)',
            zIndex: 1000,
            highlightClass: 'dom-highlight'
        }, options);

        var backdropId = "dh-backdrop",
            $this = $(this),
            $body = $("body"),
            $backdrop = $('<div id="'+backdropId+'" />')
                .css({
                    background: options.backdropBackground,
                    position: 'fixed',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    zIndex: options.zIndex
                });

        var cleanPrevious = function() {
            $("#"+backdropId).remove();
            $("."+options.highlightClass).remove();
        };

        var draw = function() {
            cleanPrevious();

            $body.append($backdrop);

            var pos = $this.position(),
                width = $this.outerWidth(),
                height = $this.outerHeight();

            $this
                .addClass(options.highlightClass)
                .css({
                    position: 'absolute',
                    width: width,
                    height: height,
                    zIndex: options.zIndex+1,
                    top: pos.top,
                    left: pos.left
                });

        };
        draw();
        $(window).resize(draw);

    };
}(jQuery);