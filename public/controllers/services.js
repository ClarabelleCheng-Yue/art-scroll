angular.module('artScroll.services', [])
.factory('Users', function($http) {

  var getAll = function() {
    $http({
      method: 'GET',
      url: '/wall'
    })
    .then(function(resp) {
      return resp;
    });
  };

  var addOne = function(name) {
    $http({
      method: 'POST',
      url: '/wall',
      data: { name: name, images: []}
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
});