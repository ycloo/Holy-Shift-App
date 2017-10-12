require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  def setup
    @team = Team.new(name: "Best Team")
    @user = User.new(name: "User", email: "user@example.com")
    @user2 = User.new(name: "User2", email: "user2@example.com")
  end

  test "can add and remove members" do
    @team.members << @user
    assert_equal (@team.members.size = 1)
    @team.members << @user2
    assert_equal (@team.members.size = 2)

    @team.members.delete(@user)
    assert_equal(team.members.first, @user2)


  end

end
