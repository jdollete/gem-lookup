class StaticPagesController < ApplicationController

  def root
    render 'root'
  end

  def favorites
    render 'favorites'
  end

end
