class ArticlesController < ApplicationController

  def index
    @integer_values = IntegerValue.pluck :_value
    @string_values = StringValue.pluck :_value
    @string_plus_integer_values = StringPlusIntegerValue.pluck :_value
  end
end
