'use strict';
(function(){

class MemberComponent {
  constructor($scope, $http) {
    $scope.members = [];
    $http.get('/api/members').success(function(members) {
        $scope.members = members;
    });

    $scope.createMember = function() {
        if ($scope.member && $scope.member.name) {
            $scope.members.push({
                name: $scope.member.name
            });
            $scope.member.name = '';
        }
    };
  }
}

angular.module('senshinJikanApp')
  .component('member', {
    templateUrl: 'app/member/member.html',
    controller: MemberComponent
  });

})();
