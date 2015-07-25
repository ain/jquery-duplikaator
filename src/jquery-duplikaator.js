(function($) {

  'use strict';

  var pluginName = 'duplikaator';

  var defaults = {
    selectors: {
      triggerer: '.js_duplikaator__triggerer'
    }
  };

  var selectors = {
    triggerer: defaults.selectors.triggerer
  };

  var classes = {
  };

  function Duplikaator(element, options) {

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  function addEventListeners() {

  }

  Duplikaator.prototype = {

    init: function() {
      addEventListeners();
    },

    destroy: function() {

    }

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Duplikaator(this, options));
      }
    });
  };

})(jQuery);
