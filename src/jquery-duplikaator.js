(function($) {

  'use strict';

  var pluginName = 'duplikaator';

  function Duplikaator(element, options) {

    var defaults = {
      nameGenerator: true
    };

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);

    this.destroy = function() {
      this.element.removeData('plugin_' + pluginName);
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
