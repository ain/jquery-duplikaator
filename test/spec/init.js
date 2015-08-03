/* global expect, it, beforeEach, afterEach, describe, context */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: true,
      emitter: false
    };

    describe('init', function() {

      context('when initialised on valid element', function() {
        beforeEach(function() {
          duplikaator = element.duplikaator(config).data(pluginName);
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
          duplikaator = element.duplikaator(newConfig).data(pluginName);
          var nameGenerator = duplikaator.settings.nameGenerator;
          return expect(nameGenerator).to.eql(newConfig.nameGenerator);
        });

        context('with default options', function() {

          beforeEach(function() {
            duplikaator.destroy();
            duplikaator = element.duplikaator().data(pluginName);
          });

          it('expected to have name generator', function() {
            var nameGenerator = duplikaator.settings.nameGenerator;
            return expect(nameGenerator).to.eql(config.nameGenerator);
          });

          it('expected to have emitter', function() {
            var emitter = duplikaator.settings.emitter;
            return expect(emitter).to.eql(config.emitter);
          });

        });

      });

      context('when initialised on invalid element', function() {

        var backup = null;

        beforeEach(function() {
          backup = {
            'source': element.attr('data-duplikaator-source'),
            'target': element.attr('data-duplikaator-target')
          };
        });

        afterEach(function() {
          element.attr('data-duplikaator-source', backup.source);
          element.attr('data-duplikaator-target', backup.target);
        });

        it('expected to throw error if source is missing', function() {
          element.removeAttr('data-duplikaator-source');
          function init() {
            element.duplikaator().data(pluginName);
          }
          var message = 'Invalid element. Missing source.';
          return expect(init).to.throw(ReferenceError, message);
        });

        it('expected to throw error if target is missing', function() {
          element.removeAttr('data-duplikaator-target');
          function init() {
            element.duplikaator().data(pluginName);
          }
          var message = 'Invalid element. Missing target.';
          return expect(init).to.throw(ReferenceError, message);
        });
      });

    });

  });
})();
