class Team < ApplicationRecord
  has_and_belongs_to_many :members, class_name: 'User', foreign_key: 'user_id', optional:true
  has_one :leader, class_name: 'User', foreign_key: 'user_id'
end