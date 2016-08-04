angular.module('teamController', [])
    .controller("ListController", function(teams, $scope) {
            $scope.teams = teams.data;
        })
    .controller("NewTeamController", function($scope, $location, TeamService) {
        $scope.back = function() {
            $location.path("#/");
        }
    
        $scope.saveTeam = function(team) {
            TeamService.createTeam(team).then(function(doc) {
                var teamUrl = "/team/" + doc.data._id;
                $location.path(teamUrl);
            }, function(response) {
                alert(response);
            });
        }
    })
    .controller("EditTeamController", function($scope, $routeParams, TeamService) {
        TeamService.getTeam($routeParams.teamId).then(function(doc) {
            $scope.team = doc.data;
        }, function(response) {
            alert(response);
        });
    
        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.teamFormUrl = "/partials/team-form.html";
        }
    
        $scope.back = function() {
            $scope.editMode = false;
            $scope.teamFormUrl = "";
        }
    
        $scope.saveTeam = function(team) {
            TeamService.editTeam(team);
            $scope.editMode = false;
            $scope.teamFormUrl = "";
        }
    
        $scope.deleteTeam = function(teamId) {
            TeamService.deleteTeam(teamId);
        }
    });