/* global expect, it, beforeEach, afterEach, describe, xdescribe, xit */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: true
    };

    xdescribe('duplicate', function() {
      beforeEach(function() {
        duplikaator = element.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

      it('expected to duplicate source element into target', function() {
        var source = $(element.attr('data-duplikaator-source')).html();
        var target = $(element.attr('data-duplikaator-target')).html();
        var expectation = source + target;
        //console.log('trigger');
        element.trigger('click.duplikaator');
        //duplikaator.duplicate();
        var newTarget = $(element.attr('data-duplikaator-target')).html();
        return expect(newTarget).to.eql(expectation);
      });

      xit('expected to duplicate source element', function() {
        var fieldsets = $(element.attr('data-duplikaator-source'));
        return expect(fieldsets.length).to.eql(2);
      });

    });
  });

})();
