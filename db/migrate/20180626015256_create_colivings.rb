class CreateColivings < ActiveRecord::Migration[5.2]
  def change
    create_table :colivings do |t|
      t.string :location
      t.text :about
      t.string :website
      t.integer :rating
    end
  end
end
