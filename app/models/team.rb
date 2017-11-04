class Team < ApplicationRecord
  has_many :memberships
  has_many :users, through: :memberships
  has_one :leader, class_name: 'User', foreign_key: 'user_id'
end
