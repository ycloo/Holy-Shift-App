angular.module('memberService',[])
.service("MemberService", function($http) {
        this.getMembers = function() {
            return $http.get("/members").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding members.");
                });
        }
        this.createMemberWithTeam = function(member,teamId = "") {
            console.log("creating member with team")
            return $http.post("/members/"+ teamId+ "/members", member).
                then(function(response) {
                    return response;
                }, function(response) {
                    console.log(response);
                    alert("Error creating member.");
                });
        }
        this.createMember = function(member) {
            return $http.post("/members", member).
                then(function(response) {
                    return response;
                }, function(response) {
                    console.log(response);
                    alert("Error creating member.");
                });
        }
        this.getMember = function(memberId) {
            var url = "/members/" + memberId;
            return $http.get(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding this member.");
                });
        }
        this.editMember = function(member) {
            var url = "/members/" + member._id;
            console.log(member.id);
            return $http.put(url, member).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error editing this member.");
                    console.log(response);
                });
        }
        this.deleteMember = function(memberId) {
            var url = "/members/" + memberId;
            return $http.delete(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error deleting this member.");
                    console.log(response);
                });
        }
    })