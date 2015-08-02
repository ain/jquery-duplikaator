/* global expect, it, beforeEach, afterEach, describe, context */

'use strict';

(function() {

  describe('Duplikaator', function() {

    var element = $('.js_duplicate-button');
    var duplikaator = null;
    var pluginName = 'plugin_duplikaator';

    var config = {
      nameGenerator: false
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

      context('with name generator', function() {

        beforeEach(function() {
          duplikaator.settings.nameGenerator = true;
        });

        it('expected to update name of duplicated elements', function() {
          var source = $(element.attr('data-duplikaator-source'));
          var target = $(element.attr('data-duplikaator-target'));
          var firstName = source.find('input').eq(0).attr('name');
          duplikaator.duplicate();
          var matches = target.find('input[name=' + firstName + '1]');
          return expect(matches).to.have.length.above(0);
        });

      });

    });
  });

})();
