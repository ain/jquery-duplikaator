(function($, window, document) {

  'use strict';

  var pluginName = 'duplikaator';

  var defaults = {
  };

  var selectors = {
  };

  var classes = {
  };

  function Duplikaator(element, options) {

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    addEventListeners();
  }

  function addEventListeners() {

  }

  Duplikaator.prototype = {

    init: function(event) {
    }

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Duplikaator(this, options));
      }
    });
  };

})(jQuery, window, document);