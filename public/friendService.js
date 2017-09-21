angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      })
    };

    this.getFriends = function( profile ) {
      return $http({
        method: 'GET',
        url: '/api/profile',
        data: profile
      })
    };
  
});
