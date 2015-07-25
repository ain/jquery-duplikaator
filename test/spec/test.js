/* global expect, it, beforeEach, afterEach, describe */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var form = $('form');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';
    var config = {
      selectors: {
        triggerer: '.js_duplikaator__triggerer'
      }
    };

    describe('init', function() {
      beforeEach(function() {
        duplikaator = form.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

      it('expected to construct object', function() {
        return expect(duplikaator).to.be.an.object;
      });

      it('expected to construct object with settings', function() {
        return expect(duplikaator.settings).to.be.an.object;
      });

      it('expected to construct object with settings', function() {
        return expect(duplikaator.settings.selectors).to.eql(config.selectors);
      });

      it('expected to construct object with defaults', function() {
        duplikaator.destroy();
        duplikaator = form.duplikaator().data(pluginName);
        return expect(duplikaator.settings.selectors.triggerer).to.eql(config.selectors.triggerer);
      });

      it('expected to have click handler on triggerer', function() {
        return expect(duplikaator).to.be.an.object;
      });

    });

    describe('duplicate', function() {
      beforeEach(function() {
        duplikaator = form.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

    });

  });
})();
