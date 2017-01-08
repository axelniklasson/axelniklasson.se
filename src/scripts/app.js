var app = angular.module('axelniklasson', []);

app.controller('MainController', function($scope, $http) {
    // Get three latest posts from resa.axelniklasson.se
    var req = {
        method: 'GET',
        url: 'https://writercms-core.axelniklasson.se/posts?skip=0&take=3',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    $http(req).then(function(response) {
        $scope.posts = response.data;
    }, function(err) {
        // Could not fetch posts
    });
});
