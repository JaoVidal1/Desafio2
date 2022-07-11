

require('angular.min.js');
require('angular-mocks');
require('../app');
require('..tests/usersService');

describe('Users Service', function () {
  beforeEach(function () {
    angular.mock.module('api');
  });

  var _usersService;
  var configs, httpBackend, rootScope;

  beforeEach(inject((usersAPI, $httpBackend, config, $rootScope) => {
    _usersService = usersAPI;
    httpBackend = $httpBackend;
    rootScope = $rootScope;
    configs = config;
  }));

  describe('Users Service', function () {
    it('should get all players', async function () {
      httpBackend.whenGET(configs.baseUrl + '/jogadores').respond(200, [
        {
          name: 'Pedro',
          coins: 10,
        },
      ]);

      
      
    });
  });
});