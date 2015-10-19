/**
 * @author Vitalii Ofat <i@vitaliy-ofat.com>
 */
(function ($) {
    $.fn.domHighlight = function (options) {

        options = $.extend({
            backdropBackground: 'rgba(0,0,0, .5)',
            zIndex: 1000,
            highlightClass: 'dom-highlight',
            fakeElemClass: 'dh-fake-element',
            disableOnClickOut: true,
            disableCallback: function () {
            }
        }, options);

        var backdropId = "dh-backdrop",
            $this = $(this),
            $body = $("body"),
            previousConfig = {
                position: '',
                zIndex: '',
                top: '',
                left: ''
            },
            $backdrop = $('<div id="' + backdropId + '" />')
                .css({
                    background: options.backdropBackground,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: options.zIndex
                });


        var cleanPrevious = function () {
            $("#" + backdropId).remove();
            $("." + options.fakeElemClass).remove();
            $("." + options.highlightClass)
                .css(previousConfig)
                .removeClass(options.highlightClass);
        };

        var draw = function () {
            cleanPrevious();

            $body.append($backdrop);

            var pos = $this.position(),
                width = $this.outerWidth(),
                height = $this.outerHeight();

            previousConfig = {
                position: $this.css('position'),
                zIndex: $this.css('zIndex'),
                top: $this.css('top'),
                left: $this.css('left')
            };

            $('<div />')
                .addClass(options.fakeElemClass)
                .css({
                    width: width,
                    height: height,
                    display: $this.css('display'),
                    float: $this.css('float')
                })
                .insertAfter($this);

            $this
                .addClass(options.highlightClass)
                .css({
                    position: 'absolute',
                    width: width,
                    height: height,
                    zIndex: options.zIndex + 1,
                    top: pos.top,
                    left: pos.left
                });

        };
        draw();
        $(window).resize(draw);

        if (options.disableOnClickOut) {
            $("#" + backdropId).click(function (e) {
                e.preventDefault();
                cleanPrevious();

                options.disableCallback();
            });
        }

        return {
            hide: function () {
                cleanPrevious();
            }
        };
    };
})(jQuery);