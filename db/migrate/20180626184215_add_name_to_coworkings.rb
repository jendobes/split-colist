class AddNameToCoworkings < ActiveRecord::Migration[5.2]
  def change
    add_column :coworkings, :name, :string
  end
end
