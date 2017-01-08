var app = angular.module('axelniklasson', []);

var MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

app.filter('prettyDate', function() {
    return function(dateString) {
        var date = new Date(dateString);
        return MONTHS[date.getMonth()] + ' ' + (date.getDay() + 1);
    };
});

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
        console.log(response.data);
    }, function(err) {
        // Could not fetch posts
    });
});
