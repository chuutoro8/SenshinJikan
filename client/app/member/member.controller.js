'use strict';
(function(){

class MemberComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('senshinJikanApp')
  .component('member', {
    templateUrl: 'app/member/member.html',
    controller: MemberComponent
  });

})();
