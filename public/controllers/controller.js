var myApp = angular.module('artScroll', ['ngRoute', 'artScroll.services']);

//------------------- NAVIGATION ------------------//
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/controllers/login.html',
    controller: 'loginCtrl'
  })
  .when('/wall', {
    templateUrl: '/controllers/wall.html',
    controller: 'wallCtrl'
  })
  .otherwise({
    redirectTo: '/' //use for logout.
  });
});

//------------------ CONTROLLERS ------------------ //
myApp.controller('AppCtrl', function($scope, $http) {
  console.log('hello world from controler');
});

myApp.controller('loginCtrl', function($scope, $http, $location, Users) {

  $scope.changeLoc = function() {
    var newName = $scope.name;
    console.log(newName, 'new name');
    $location.path('/wall');
  };

  //add new user to db
  $scope.addUser = function() {
    console.log('adding user', $scope.name);

    Users.addOne($scope.name).then(function(result) {
      $scope.changeLoc();
      console.log(result, 'result from post new user req');
    }, function(err) {
      console.log(err, 'error in adding user.');
    });
  };

});

myApp.controller('wallCtrl', function($scope, $http, $location) {

 // auto set: get request from server sent a res(userList)
  $http.get('/wall').success(function(response) {
    console.log('I got seh data from wall controller', response);
    
    $scope.userList = response;
  });

  //when submit a link, add new image to user object
  $scope.displayImage = function() {

    //find current user in db
    $scope.userList.push({name: 'cbelle', images: $scope.url});
      //add new image to array in curr user obj.
  };
});

//----------------- FACTORIES -------------------//
myApp.factory('userMethods', [function($http) {
  
}]);
