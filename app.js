var app = angular.module('myApp', []);

app.controller('movieCtrl', function ($scope, $http) {

    $scope.submitSearch = function (isValid) {

        if (isValid) {

            $scope.Title = "";
            $scope.Rated = "";
            $scope.Year = "";
            $scope.TotalSeasons = "";
            $scope.Type = "";
            $scope.Genre = "";
            $scope.ImdbRating = "";
            $scope.Plot = "";
            $scope.Writer = "";
            $scope.Director = "";
            $scope.Actors = "";
            $scope.Writtenby = "";
            $scope.directed = "";
            $scope.starting = "";
            $scope.left = "";
            $scope.right = "";
            $scope.Poster1= "";
 
            if ($scope.search != null && $scope.YearSearch != null && $scope.TypeSearch != null){
            $scope.urlsearch = "http://www.omdbapi.com/?s=" + $scope.search + "&y=" + $scope.YearSearch + "&type=" + $scope.TypeSearch + "&apikey=c2609f89";
            $scope.display = "loading plese wait";
            $http.get($scope.urlsearch).then(function (response) {
                $scope.myData = response.data;
                console.log($scope.myData);
                console.log(response);
                $scope.Data = $scope.myData.Search;
                console.log("$scope.Data", $scope.Data);
            });
            }
            else if ($scope.search != null && $scope.TypeSearch != null && $scope.YearSearch == null) {
                $scope.urlsearch2 = "http://www.omdbapi.com/?s=" + $scope.search + "&type=" + $scope.TypeSearch + "&apikey=c2609f89";
                $scope.display = "loading plese wait";
                $http.get($scope.urlsearch2).then(function (response) {
                    $scope.myData = response.data;
                    $scope.Data = $scope.myData.Search;
                });
            } else if ($scope.search != null && $scope.YearSearch != null && $scope.TypeSearch == null) {
                $scope.urlsearch3 = "http://www.omdbapi.com/?s=" + $scope.search + "&y=" + $scope.YearSearch + "&apikey=c2609f89";
                $http.get($scope.urlsearch3).then(function (response) {
                    $scope.myData = response.data;
                    console.log($scope.myData);
                    $scope.Data = $scope.myData.Search;
                });
            } else if ($scope.search != null && $scope.YearSearch == null && $scope.TypeSearch == null) {
                $scope.urlsearch3 = "http://www.omdbapi.com/?s=" + $scope.search+ "&apikey=c2609f89";
                $http.get($scope.urlsearch3).then(function (response) {
                    $scope.myData = response.data;
                    console.log($scope.myData);
                    $scope.Data = $scope.myData.Search;
                });
            }


        } else {
            $scope.Display = "Invalid";
        }
        $scope.showDetails = function (movie_title) {
            $scope.urlsearch4 = "http://www.omdbapi.com/?t=" + movie_title + "&plot=full&apikey=c2609f89";
            console.log($scope.urlsearch4);
            $http.get($scope.urlsearch4).then(function (response) {
                $scope.myData1 = response.data;
                $scope.Writtenby = "Written by: ";
                $scope.directed = "Directed by: ";
                $scope.starting = "Starting: ";
                $scope.left = "(";
                $scope.right = ")";
                $scope.Poster1 = $scope.myData1.Poster;
                console.log($scope.Poster1);
                $scope.Title = $scope.myData1.Title;
                $scope.Rated = $scope.myData1.Rated;
                $scope.Year = $scope.myData1.Year;
                $scope.TotalSeasons = $scope.myData1.totalSeasons;
                $scope.Type = $scope.myData1.Type;
                $scope.Genre = $scope.myData1.Genre;
                $scope.ImdbRating = $scope.myData1.imdbRating;
                $scope.Plot = $scope.myData1.Plot;
                $scope.Writer = $scope.myData1.Writer;
                $scope.Director = $scope.myData1.Director;
                $scope.Actors = $scope.myData1.Actors;
                $scope.Data = [];
            });
        }
    };
});
