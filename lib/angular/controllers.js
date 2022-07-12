var crud = angular.module('crud', []);

crud.controller('Desafio2Controller', function ($scope, $http) {
  
  $scope.jogadorSelecionado = '';
  $scope.jogadores = [];

  function carregaJogador() {
    $http({
      url: 'http://localhost:3000/jler',
      method: 'GET',
    }).then((res) => {
      $scope.jogadores = res.data;
    });
  }  
  
  $scope.isJogadorSelecionado = function (jogadores){
    return jogadores.some(function(jogador){
         return jogador.selecionado;
     });
    };
    
  $scope.adicionarJogador = function (jogador) {
    $http.post('http://localhost:3000/jcria', jogador).then(() => {
      delete $scope.jogadores;
      carregaJogador();
    });
  };

  

  $scope.editarJogador = function () {
    $http
      .put(
        'http://localhost:3000/' + $scope.jogador.selecionado._id,
        jogador,
      )
      .then(() => {
        delete $scope.jogadores;
        document.location.reload(true);
      });
  };

  $scope.apagarJogador = function () {
    $scope.jogadores.forEach(jogador => {
      if(jogador.selecionado){

        var deletingUser = jogador._id;
        $http
          .delete('http://localhost:3000/jogadores/' + deletingUser )
          .then(() => {
            $scope.jogadores = $scope.jogadores.filter(function (jogador) {
              if (jogador._id !== deletingUser) return jogador;
            });
          });
      }
    });
  };

  carregaJogador();
});