class CreateCoworkings < ActiveRecord::Migration[5.2]
  def change
    create_table :coworkings do |t|
      t.text :about
      t.string :location
      t.string :website
      t.integer :rating
    end
  end
end
