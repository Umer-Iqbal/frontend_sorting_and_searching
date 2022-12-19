class CreateStringValues < ActiveRecord::Migration[7.0]
  def change
    create_table :string_values do |t|
      t.string :_value

      t.timestamps
    end
  end
end
