var pollsApp = angular.module('polls', ['ngRoute']);

pollsApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/polls/', {
        templateUrl: '/modules/polls/partials/index.html',
        controller: 'pollsIndexController'
    }).when('/polls/vote/:pollId', {
        templateUrl: '/modules/polls/partials/vote.html',
        controller: 'pollsVoteController'
    }).when('/polls/results', {
        templateUrl: '/modules/polls/partials/results.html',
        controller: 'pollsVoteController'
    }).when('/polls/results/:pollId', {
        templateUrl: '/modules/polls/partials/result.html',
        controller: 'pollsVoteController'
    });
}]);