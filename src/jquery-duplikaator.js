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
    this.sequenceId = 0;

    var self = this;
    var source = null;
    var target = null;
    var backup = null;

    this.destroy = function() {
      removeEventHandlers();
      this.restore();
      this.element.removeData('plugin_' + pluginName);
    };

    this.duplicate = function() {
      this.sequenceId++;
      var clone = source.clone();
      if (this.settings.nameGenerator) {
        updateNames(clone);
      }
      target.append(clone);
      return clone;
    };

    this.restore = function() {
      target.html(backup);
    };

    function updateNames(dupe) {
      dupe.find('*[name]').each(function() {
        $(this).attr('name', $(this).attr('name') + self.sequenceId);
      });
    }

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
        self.element.on(getNamespacedEvent('click'), handleClick);
      } else {
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
      backup = target.html();
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
