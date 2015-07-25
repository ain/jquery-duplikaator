(function($) {

  'use strict';

  var pluginName = 'duplikaator';

  function Duplikaator(element, options) {

    var defaults = {
      nameGenerator: true
    };

    var datas = {
      source: 'duplikaator-source',
      target: 'duplikaator-target'
    };

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);

    var self = this;

    this.destroy = function() {
      this.element.removeData('plugin_' + pluginName);
    };

    function addEventListeners() {
    }

    function getData(data) {
      return self.element.attr('data-' + data);
    }

    function evaluateElement() {
      if (!getData(datas.target)) {
        throw new ReferenceError('Invalid element. Missing target.');
      } else if (!getData(datas.source)) {
        throw new ReferenceError('Invalid element. Missing source.');
      }
    }

    function init() {
      evaluateElement();
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
