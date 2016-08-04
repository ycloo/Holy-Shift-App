angular.module('teamService',[])
.service("TeamService", function($http) {
        this.getTeams = function() {
            return $http.get("/teams").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding teams.");
                });
        }
        this.createTeam = function(team) {
            return $http.post("/teams", team).
                then(function(response) {
                    return response;
                }, function(response) {
                    console.log(response);
                    alert("Error creating team.");
                });
        }
        this.getTeam = function(teamId) {
            var url = "/teams/" + teamId;
            return $http.get(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding this team.");
                });
        }
        
        this.editTeam = function(team) {
            var url = "/teams/" + team._id;
            console.log(team.id);
            return $http.put(url, team).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error editing this team.");
                    console.log(response);
                });
        }
        this.deleteTeam = function(teamId) {
            var url = "/teams/" + teamId;
            return $http.delete(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error deleting this team.");
                    console.log(response);
                });
        }
    })