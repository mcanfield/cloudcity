(function() {
  'use strict';

  angular
    .module('cloudcity')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    // Scope variables accessed on the view via the controllerAs
    // namespace 'main', example: 'main.foo'
    vm.foo = [];
    vm.bar = '';
    vm.baz = {};

    init();

    function init() {

    }
  }
})();
