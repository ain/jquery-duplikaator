/* global expect, it, beforeEach, afterEach, describe, context */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: false,
      emitter: true
    };

    describe('duplicate', function() {
      beforeEach(function() {
        duplikaator = element.duplikaator(config).data(pluginName);
      });

      afterEach(function() {
        duplikaator.destroy();
      });

      context('with emitter', function() {

        it('expected to emit event with element, sequence ID', function(done) {
          var source = $(element.attr('data-duplikaator-source'))[0].outerHTML;
          var calls = 0;
          element.bind('duplicate.duplikaator', function(event, element, id) {
            if (++calls === 2) {
              done();
              return expect(element[0].outerHTML).to.equal(source) &&
                expect(id).to.eql(2);
            }
          });
          duplikaator.duplicate();
          duplikaator.duplicate();
        });

      });

      context('without emitter', function() {

        beforeEach(function() {
          duplikaator.settings.emitter = false;
        });

        it('expected not to emit event', function(done) {
          var timeout = setTimeout(function() {
            done();
          }, 1500);
          element.bind('duplicate', function() {
            clearTimeout(timeout);
            throw new Error('duplicate event was emitted.');
          });
          duplikaator.duplicate();
        });

      });

    });
  });

})();
