(function($) {

  'use strict';

  var pluginName = 'duplikaator';

  function Duplikaator(element, options) {

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);

    var classes = {
      triggerer: 'js_duplikaator__triggerer'
    };

    var defaults = {
      selectors: {
        triggerer: '.' + classes.triggerer
      }
    };

    var selectors = {
      triggerer: defaults.selectors.triggerer
    };

    this.destroy = function() {

    };

    function addEventListeners() {
    }

    function init() {
      addEventListeners();
    }

    init();
  }

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Duplikaator(this, options));
      }
    });
  };

})(jQuery);
