class AddCoworkingIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :coworking_id, :integer
  end
end
