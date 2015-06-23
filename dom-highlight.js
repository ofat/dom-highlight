/**
 * @author Vitalii Ofat <i@vitaliy-ofat.com>
 */
!function($){
    $.fn.domHighlight = function(options) {

        options = $.extend({
            backdropBackground: 'rgba(0,0,0, .3)',
            zIndex: 1000
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
        };

        var draw = function() {
            cleanPrevious();

            $body.append($backdrop);

            var pos = $this.position(),
                width = $this.width(),
                height = $this.height(),
                $clone = $this.clone();

            $clone.css({
                position: 'absolute',
                width: width,
                height: height,
                zIndex: options.zIndex+1,
                top: pos.top,
                left: pos.left
            });

            $body.append($clone);
        };
        draw();
        $(window).resize(draw);
    };
}(jQuery);