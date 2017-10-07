class CreateShiftsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :shifts_users do |t|
      t.references :user, foreign_key: true
      t.references :shift, foreign_key: true
    end
  end
end
