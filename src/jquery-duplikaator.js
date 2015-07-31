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
    var source = null;
    var target = null;

    this.destroy = function() {
      removeEventHandlers();
      this.element.removeData('plugin_' + pluginName);
    };

    this.duplicate = function() {
      console.log('dupe!');
      var clone = source.clone();
      target.append(clone);
      return clone;
      //return source.clone().appendTo(target);
    };

    function getSourceElement() {
      return $(getData(datas.source));
    }

    function getTargetElement() {
      return $(getData(datas.target));
    }

    function getData(data) {
      return self.element.attr('data-' + data);
    }

    function getNamespacedEvent(event) {
      return event + '.' + pluginName;
    }

    function evaluateElement() {
      if (!getData(datas.target)) {
        throw new ReferenceError('Invalid element. Missing target.');
      } else if (!getData(datas.source)) {
        throw new ReferenceError('Invalid element. Missing source.');
      }
    }

    function addEventListeners() {
      if (self.element.on !== undefined) {
        console.log('binding on');
        self.element.on(getNamespacedEvent('click'), handleClick);
      } else {
        console.log('binding bind');
        self.element.bind(getNamespacedEvent('click'), handleClick);
      }
    }

    function removeEventHandlers() {
      if (self.element.off !== undefined) {
        self.element.off(getNamespacedEvent('click'));
      } else {
        self.element.unbind(getNamespacedEvent('click'));
      }
    }

    function handleClick() {
      self.duplicate();
    }

    function init() {
      evaluateElement();
      source = getSourceElement();
      target = getTargetElement();
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
