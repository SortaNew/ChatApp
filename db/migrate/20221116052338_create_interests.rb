class CreateInterests < ActiveRecord::Migration[7.0]
  def change
    create_table :interests do |t|
      t.text :name
      t.integer :user_id

      t.timestamps
    end
  end
end
