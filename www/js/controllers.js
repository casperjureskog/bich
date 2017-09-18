angular.module('starter.controllers', [])

.controller('indexCtrl', function($scope, $state) {
  $scope.go_to_stories = function() {
    $state.go('stories');
  }
})

.controller('bookCtrl', function($scope, $state) {
  $scope.go_to_book = function() {
    $state.go('book');
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('storiesCtrl', function($scope, $state) {
  $scope.go_to_book = function() {
    $state.go('book');
  };
});
