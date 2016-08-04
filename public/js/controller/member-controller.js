angular.module('memberController', [])
    .controller("NewMemberController", function($scope, $location, MemberService,$routeParams) {
            var teamId = $routeParams.teamId;
            $scope.back = function() {
                $location.path("#/team/"+teamId);
            }
        
            $scope.saveMember = function(member) {
                MemberService.createMemberWithTeam(member,teamId).then(function(doc) {
                    var memberUrl = "/member/" + doc.data._id;
                    $location.path(memberUrl);
                }, function(response) {
                    alert(response);
                });
            }
        })
    .controller("EditMemberController", function($scope,$routeParams, MemberService) {
            MemberService.getMember($routeParams.memberId).then(function(doc) {
            $scope.member = doc.data;
        }, function(response) {
            alert(response);
        });
    
        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.memberFormUrl = "/partials/member-form.html";
        }
    
        $scope.back = function() {
            $scope.editMode = false;
            $scope.memberFormUrl = "";
        }
    
        $scope.saveMember = function(member) {
            MemberService.editMember(member);
            $scope.editMode = false;
            $scope.memberFormUrl = "";
        }
    
        $scope.deleteTeam = function(memberId) {
            MemberService.deleteMember(memberId);
        }
        });
    