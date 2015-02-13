var app = angular.module('app', ['dashboard', 'sample', 'polls', 'selfie', 'whatson', 'feedback', 'treasurehunt']);

app.filter('trustHTML', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);