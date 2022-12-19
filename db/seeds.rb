# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

string_values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

string_values.each do |string_value|
  StringValue.create(_value: string_value)
  StringPlusIntegerValue.create(_value: string_value)
end

for i in 0..20
  IntegerValue.create!(_value: "#{i}")
  StringPlusIntegerValue.create(_value: i)
  StringPlusIntegerValue.create(_value: "#{i} #{string_values[i]}" )
end

