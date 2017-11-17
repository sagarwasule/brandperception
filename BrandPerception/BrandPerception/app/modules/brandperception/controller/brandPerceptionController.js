define(['application-configuration', 'brandPerceptionService'], function (app) {
    app.register.controller('brandPerceptionController', ['$scope', '$interval', 'brandPerceptionService',
        function ($scope, $interval, brandPerceptionService) {

        $scope.currentStep = 0;

        $scope.analyseSearch = function() {
            console.log($scope.currentStep);

            var s = $interval(function () {
                $scope.currentStep++;
                console.log($scope.currentStep);
            }, 3000);

            var promise = brandPerceptionService.fetchTweets();
            promise.then(function(response) {
                    console.log(response);
                })
                .catch(function(err) {
                    console.log(err);
                });

        }

    }]);
});