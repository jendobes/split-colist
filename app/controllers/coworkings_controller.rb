class CoworkingsController < ApplicationController

  def index
    @coworkings = Coworking.all
    render json: @coworkings
  end

  def show
    @coworking = Coworking.find(params: id)
    render json: @coworking
  end

end
