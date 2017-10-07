class TeamsController < ApplicationController

  def index
    # For URL like /teams/1/members
    # Get the team with id=1
    @team = Team.find(params[:team_id])

    # Access all members for that team
    @members = @team.members
  end

  def new
  end
end
