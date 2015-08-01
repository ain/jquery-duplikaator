/* global expect, it, beforeEach, afterEach, describe */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
    };

    describe('restore', function() {

      beforeEach(function() {
        duplikaator = element.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

      it('expected to restore target content', function() {
        var expectation = $(element.attr('data-duplikaator-target')).html();
        duplikaator.duplicate();
        duplikaator.restore();
        var actual = $(element.attr('data-duplikaator-target')).html();
        return expect(actual).to.equal(expectation);
      });

    });
  });
})();
