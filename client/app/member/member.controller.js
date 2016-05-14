'use strict';
(function(){

class MemberComponent {
  constructor() {
    this.message = 'Hello';
    this.members = [{name: '田中'},{name: '鈴木'}];
  }
}

angular.module('senshinJikanApp')
  .component('member', {
    templateUrl: 'app/member/member.html',
    controller: MemberComponent
  });

})();
