class Removecolumn < ActiveRecord::Migration
  def change
    remove_column :todos, :done
    add_column :todos, :done, :boolean
  end
end
