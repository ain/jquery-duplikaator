/* global expect, it, beforeEach, afterEach, describe, context */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: true
    };

    describe('duplicate', function() {
      beforeEach(function() {
        duplikaator = element.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

      context('when called directly', function() {
        it('expected to duplicate source element into target', function() {
          var source = $(element.attr('data-duplikaator-source'))[0].outerHTML;
          var target = $(element.attr('data-duplikaator-target')).html();
          var expectation = target + source;
          duplikaator.duplicate();
          var newTarget = $(element.attr('data-duplikaator-target')).html();
          return expect(newTarget).to.eql(expectation);
        });
      });

      context('when triggered over handler', function() {
        it('expected to duplicate source element into target', function() {
          var source = $(element.attr('data-duplikaator-source'))[0].outerHTML;
          var target = $(element.attr('data-duplikaator-target')).html();
          var expectation = target + source;
          element.trigger('click.duplikaator');
          var newTarget = $(element.attr('data-duplikaator-target')).html();
          return expect(newTarget).to.eql(expectation);
        });
      });

    });
  });

})();
