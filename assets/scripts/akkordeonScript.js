
(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'simpleAccordion',
    defaults = {
        multiple: false,
        speedOpen: 300,
        speedClose: 150,
        easingOpen: null,
        easingClose: null,
        headClass: 'accordion-header',
        bodyClass: 'accordion-body',
        openClass: 'open',
        defaultOpenClass: 'default-open',
        cbClose: null, //function (e, $this) {},
        cbOpen: null //function (e, $this) {}
    };
    function Accordion(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        if (typeof this.$el.data('multiple') !== 'undefined') {
            this.options.multiple = this.$el.data('multiple');
            } else {
            this.options.multiple = this._defaults.multiple;
        }
        this.init();
    }
    Accordion.prototype = {
        init: function () {
            var o = this.options,
            $headings = this.$el.children('.' + o.headClass);
            $headings.on('click', {_t:this}, this.headingClick);
            $headings.filter('.' + o.defaultOpenClass).first().click();
        },
        headingClick: function (e) {
            var $this = $(this),
            _t = e.data._t,
            o = _t.options,
            $headings = _t.$el.children('.' + o.headClass),
            $currentOpen = $headings.filter('.' + o.openClass);
            if (!$this.hasClass(o.openClass)) {
                if ($currentOpen.length && o.multiple === false) {
                    $currentOpen.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                        if ($.isFunction(o.cbClose)) {
                            o.cbClose(e, $currentOpen);
                        }
                        $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                            if ($.isFunction(o.cbOpen)) {
                                o.cbOpen(e, $this);
                            }
                        });
                    });
                    } else {
                    $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                        $this.removeClass(o.defaultOpenClass);
                        if ($.isFunction(o.cbOpen)) {
                            o.cbOpen(e, $this);
                        }
                    });
                }
                } else {
                $this.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                    if ($.isFunction(o.cbClose)) {
                        o.cbClose(e, $this);
                    }
                });
            }
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Accordion(this, options));
            }
         });
        };
    } (jQuery, window, document)
);

(function ($) {
//setting.js
$('.accordion-group').simpleAccordion({
    
    multiple: false, // возможность открытия одной вкладки или всех
    speedOpen: 300, // скорость открытия вкладки
    speedClose: 150, // скорость закрытия вкладки
    easingOpen: null, // эффект плавности открытия вкладки
    easingClose: null, // эффект плавности закрытия вкладки
    headClass: 'accordion-header', // класс для заголовка вкладки
    bodyClass: 'accordion-body', // класс для тела вкладки
    openClass: 'open',  // класс для открытой вкладки, применяется к accordion-header
    defaultOpenClass: 'default-open', // класс для открытой вкладки по умолчанию
    cbClose: null, // callback-функция при закрытии вкладки - function (e, $this) {},
    cbOpen: null // callback-функция при открытии вкладки - function (e, $this) {}
    
});

}(jQuery));
