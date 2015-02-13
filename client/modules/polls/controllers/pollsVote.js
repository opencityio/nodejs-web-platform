pollsApp.controller('pollsVoteController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.polldataurl = 'http://nodejs-citizenvote-platofrm.dev.opencity.io/';

//    $http.get('http://nodejs-citizenvote-platofrm.dev.opencity.io').success(function(data) {
    $scope.polls = {
        1 : {"id":1,"name":"If we had to implement cuts, would you prefer to cut either refuse collection or street lighting","options":{"1":"Refuse Collection","2":"Street Lighting"},"results":{"1":"10","2":"7"}},
        2 : {"id":2,"name":"Who wore it better?","options":{"1":"Craig Fearon","2":"Matt Reedman","3":"Dan Crack"},"results":{"1":"37","2":"23","3":"12"}}
    };

    if ($routeParams.pollId) {
        if ($routeParams.pollId in $scope.polls) {
            $scope.poll = $scope.polls[$routeParams.pollId];
            $scope.singlePoll = true;
        } else {
            window.location = '/#/polls';
        }
    } else {
        $scope.singlePoll = false;
    }


    $scope.sendPollData = function(pollId, pollChoiceId) {
        // URL of the API to receive the poll data
        var pollPostUrl = '/posturl';
        var pollData = {
            // ID of the poll
            pollId: pollId,
            // Id of the choice value
            pollChoiceId:pollChoiceId
        }

        // COMMENT THIS BIT OUT AND UNCOMMENT THE BELOW WHEN READY
        window.location = '/#/polls/results/'+pollData.pollId;


//        $http.post(pollPostUrl, pollData).success(function(data, status, headers, config){
//            window.location = '/#/polls/results/'+pollData.pollId;
//
//        }).error(function(data, status, headers, config){
//            console.log('post failure');
//            console.log('data');
//            console.log(data);
//        });
    }

    $scope.pollResultsPercentage = function(results, voteKey){
        var mostVotes = 0;

        for (var key in results) {
            var voteCount = parseInt(results[key]);
            if (voteCount > mostVotes) {
                mostVotes = voteCount;
            }
        }

        var perc = (results[voteKey]/mostVotes)*100;

        return {width: perc+"%"};
    }
}]);