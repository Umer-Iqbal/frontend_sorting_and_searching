class ArticlesController < ApplicationController

  def index
    @string_plus_integer_values = StringPlusIntegerValue.pluck :_value
  end
end
