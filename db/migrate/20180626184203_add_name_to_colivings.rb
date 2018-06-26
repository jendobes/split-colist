class AddNameToColivings < ActiveRecord::Migration[5.2]
  def change
    add_column :colivings, :name, :string
  end
end
