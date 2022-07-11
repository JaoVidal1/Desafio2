require('.angular.min.js');
require('angular-mocks');
require('..app.js');

describe('Users Controller', function () {
  beforeEach(function () {
    angular.mock.module('api');
  });

  const fakePromise = () => new Promise((resolve) => resolve);

  const _usersAPI = {
    readPlayers: fakePromise,
    createPlayer: fakePromise,
    deletePlayer: fakePromise,
    updatePlayer: fakePromise,
  };

  let controller;
  let rootScope;

  beforeEach(inject(($controller, $rootScope) => {
    rootScope = $rootScope;
    controller = $controller;
  }));

  describe('Order controller', function () {
    it('should return the right criterion and direction of the order', function () {
      const vm = newControllerInstance();
      vm.orderBy('A-Z');

      expect(vm.orderCriterion).toEqual('name');
      expect(vm.orderDirection).toEqual(false);
    });
  });

  function newControllerInstance() {
    const scope = rootScope.$new();
    controller('mainController', {
      $scope: scope,
      usersAPI: _usersAPI,
    });

    return scope;
  }
});