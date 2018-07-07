class CoworkingsController < ApplicationController

  def index
    @coworkings = Coworking.all
    render json: @coworkings
  end

  def show
    @coworking = Coworking.find(params: id)
    render json: @coworking
  end

  def create
    @coworking = Coworking.create(coworking_params)
    render json: @coworking
  end

  private

  def coworking_params
    params.required(:coworking).permit(:name, :location, :website, :about, :rating)
  end

end
