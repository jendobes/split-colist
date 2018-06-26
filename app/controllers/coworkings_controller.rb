class CoworkingsController < ApplicationController

  def index
    coworkings = Coworking.all
  end

  def show
    coworking = Coworking.find(params: id)
  end

end
