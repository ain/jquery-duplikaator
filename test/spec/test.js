/* global expect, it, beforeEach, afterEach, describe */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var form = $('form');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';
    var config = {
      nameGenerator: true
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

      it('expected to construct object overriding defaults', function() {
        duplikaator.destroy();
        var newConfig = {
          nameGenerator: false
        };
        duplikaator = form.duplikaator(newConfig).data(pluginName);
        var nameGenerator = duplikaator.settings.nameGenerator;
        return expect(nameGenerator).to.eql(newConfig.nameGenerator);
      });

      it('expected to construct object with defaults', function() {
        duplikaator.destroy();
        duplikaator = form.duplikaator().data(pluginName);
        var nameGenerator = duplikaator.settings.nameGenerator;
        return expect(nameGenerator).to.eql(config.nameGenerator);
      });

    });

    describe('destroy', function() {
      beforeEach(function() {
        duplikaator = form.duplikaator(config);
      });
      it('expected to remove data', function() {
        duplikaator.data(pluginName).destroy();
        return expect(duplikaator.data(pluginName)).to.not.be.ok;
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
