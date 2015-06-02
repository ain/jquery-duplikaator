'use strict';
/* jshint undef: false */
(function() {
  describe('Duplikaator', function() {

    var config = {
    };

    var menu = null;

    describe('init', function() {

      beforeEach(function() {
        duplikaator = $('form').duplikaator(config);
      });

      it('expected to construct object', function() {
        return expect(duplikaator).to.be.an.object;
      });

    });

  });
})();