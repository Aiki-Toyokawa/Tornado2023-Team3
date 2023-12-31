class CreateMatchedUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :matched_users do |t|
      t.references :match, null: false, foreign_key: true, unique: true
      t.references :user, null: false, foreign_key: true, unique: true
      t.string :status

      t.timestamps
    end
  end
end
