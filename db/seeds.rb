# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create!(
  email: 'jaredt@gmail.com',
  name: 'jard',
  password:'jaredpassword'
)

user2 = User.create!(
  email: 'jared2@gmail.com',
  name: 'jard2',
  password:'jaredpassword'
)

user3 = User.create!(
  email: 'jared3@gmail.com',
  name: 'jard3',
  password:'jaredpassword'
)

Shift.delete_all

shift1 = Shift.create!(
  start_time: '10:00:00',
  end_time: '11:00:00'
)

shift2 = Shift.create!(
  start_time: '13:00:00',
  end_time: '18:00:00'
)

shift3 = Shift.create!(
  start_time: '8:00:00',
  end_time: '10:00:00'
)

Team.delete_all

team1 = Team.create!(
  name: 'cool club'
)

team2 = Team.create!(
  name: 'volunteering'
)

team3 = Team.create!(
  name: 'work'
)
