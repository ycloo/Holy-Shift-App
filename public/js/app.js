angular.module('teamsApp', ['ngRoute','teamController','teamService','memberController','memberService'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "partials/list.html",
                controller: "ListController",
                resolve: {
                    teams: function(TeamService) {
                        return TeamService.getTeams();
                    }
                }
            })
            .when("/new/team", {
                controller: "NewTeamController",
                templateUrl: "partials/team-form.html"
            })
            .when("/team/:teamId", {
                controller: "EditTeamController",
                templateUrl: "partials/team.html"
            })
            .when("/new/:teamId/member",{
                controller:"NewMemberController",
                templateUrl: "partials/member-form.html"
            })
            .when("/member/:memberId", {
                controller:"EditMemberController",
                templateUrl: "partials/member.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    
    