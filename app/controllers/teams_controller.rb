class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end

  def new
  end

  def edit
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      redirect_to :action=> 'list'
    else
      render :action => 'new'
    end
  end

  def update
    @team = Team.find(params[:id])
    if @team.update_attributes(user_params)
      flash[:success] = "Team profile updated"
      redirect_to @team
    else
      render 'edit'
    end
  end

  def destroy
    Team.find(params[:id]).destroy
    flash[:success] = "Team deleted"
    redirect_to :action => 'new'
  end
end
