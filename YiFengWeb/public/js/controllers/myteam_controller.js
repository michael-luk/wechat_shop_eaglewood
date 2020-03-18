var app = angular.module('MyResellerTeamApp', []);

app.controller('MyResellerTeamController', ['$log', '$scope', '$http', function($log, $scope, $http) {

    $scope.downlineUsers = [];
    $scope.user = {};
    $scope.resellerAmount = 0;
    $scope.downlineUserOne = 0
    $scope.downlineUserTwo = 0
    $scope.downlineUserThree = 0
    $http.get('/users/current/login').success(function(data, status, headers, config) {
        if (data.flag) {
            $scope.user = data.data;

            $http.get('/downlines/users/' + $scope.user.id + '?size=500').success(function(data, status, headers, config) {
                if (data.flag) {
                    $scope.downlineUsers = data.data;
                    $scope.downlineUserOne = data.message;
                    $scope.downlineUserTwo = data.message1;
                /*    $scope.downlineUserThree = data.message2;*/

                    $http.get('/resellerorders/amount/users/' + $scope.user.id).success(function(data, status, headers, config) {
                        if (data.flag) {
                            $scope.resellerAmount = data.data;
                        } else {
                            $scope.resellerAmount = 0;
                        }
                    });
                }
            });
        } else {
            alert(data.message);
        }
    });
}]);