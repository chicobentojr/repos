(function() {
  'use strict';

  angular
    .module('repos')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
