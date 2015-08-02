/* global expect, it, beforeEach, describe */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: true
    };

    describe('destroy', function() {
      beforeEach(function() {
        duplikaator = element.duplikaator(config);
      });

      it('expected to remove data', function() {
        duplikaator.data(pluginName).destroy();
        return expect(duplikaator.data(pluginName)).to.not.be.ok;
      });

      it('expected to restore original markup', function() {
        var expectation = $(element.attr('data-duplikaator-target')).html();
        duplikaator.data(pluginName).duplicate();
        duplikaator.data(pluginName).destroy();
        var actual = $(element.attr('data-duplikaator-target')).html();
        return expect(actual).to.equal(expectation);
      });

    });

  });
})();
