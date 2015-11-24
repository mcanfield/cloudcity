(function() {
  'use strict';

  angular
    .module('cloudcity')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
