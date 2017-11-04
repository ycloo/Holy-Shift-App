json.(@user, :id, :name, :email)
json.teams @user.teams, :id, :name
json.shifts @user.shifts, :id,:start_time,:end_time

