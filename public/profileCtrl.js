angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// $scope.currentUser = friendService.getFriends().then(function(results){
	// 	console.log(results.data)
	// 	return results.data.currentUser;
	// });
	// $scope.friends = friendService.getFriends().then(function(results){
	// 	return results.data.friends;
	// });
	function getFriends(){
		friendService.getFriends().then(function(results){
			$scope.currentUser = results.data.currentUser;
			$scope.friends = results.data.friends;
		})
	}
	getFriends();
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});