var app = angular.module('matrixbApp', []);

app.filter('safehtmls', function($sce) {
	return function(htmlString) {
		return $sce.trustAsHtml(htmlString);
	}
});


app.filter('getImageFromSplitStr', function() {
	return function(splitStr, position) {
		return GetListFromStrInSplit(splitStr)[position];
	}
});

app.filter('getImageFromSplitStrtext', function() {
	return function(splitStr1, position1) {
		return GetListFromStrInSplitText(splitStr1)[position1];
	}
});

app.controller('matrixbController', [
    '$scope',
    '$http',

    function ($scope, $http) {
        $scope.matrixbs = [];
        $scope.page = 1;
        $scope.currentObj = {}
        $scope.pageInfo = {}
        $scope.jumpPage = 1


        $scope.$watch('page', function () {
            refreshDate();
        }, false);


        $scope.goHomePage = function () {
            $scope.page = 1;
        }

        $scope.goPrevPage = function () {

            $scope.page = $scope.pageInfo.current - 1;

        }

        $scope.goNextPage = function () {

            $scope.page = $scope.pageInfo.current + 1;

        }

        $scope.goLastPage = function () {
            $scope.page = $scope.pageInfo.total;
        }

        $scope.goJumpPage = function () {
            if ($scope.pageInfo.total < $scope.jumpPage) {

                $scope.page = $scope.page;
            } else {
                $scope.page = $scope.jumpPage;
            }


        }

        function refreshDate() {
            $http.get('/infos?size=8&classify=集团那洲基地    &page=' + $scope.page).success(
                function (data, status, headers, config) {
                    if (data.flag) {
                        $scope.matrixbs = data.data
                        $scope.pageInfo = data.page

                    } else {
                        //alert(data.message);
                    }
                });

        }
    }]);

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("A2"), [ "newsApp" ]);
});