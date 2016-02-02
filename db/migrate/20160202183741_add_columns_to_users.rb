class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :book, :string
    add_column :users, :review, :text
  end
end
