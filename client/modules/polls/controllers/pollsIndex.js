pollsApp.controller('pollsIndexController', ['$scope', '$http', '$location', function($scope, $http){
    $scope.polldataurl = 'http://nodejs-citizenvote-platofrm.dev.opencity.io/';

//    $http.get('http://nodejs-citizenvote-platofrm.dev.opencity.io').success(function(data) {
        $scope.polls = {
            1 : {"id":1,"name":"If we had to implement cuts, would you prefer to cut either refuse collection or street lighting","options":{"1":"Refuse Collection","2":"Street Lighting"},"results":{"1":"10","2":"7"}},
            2 : {"id":2,"name":"Who wore it better?","options":{"1":"Craig Fearon","2":"Matt Reedman", "3":"Dan Crack"},"results":{"1":"37","2":"23", "3":"5"}}
        };
//    });
}]);