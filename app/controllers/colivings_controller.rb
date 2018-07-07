require 'pry'
class ColivingsController < ApplicationController

  def index
    @colivings = Coliving.all
    render json: @colivings.to_json(include: :comments)
  end

  def show
    @coliving = Coliving.find(params[:id])
    render json: @coliving
  end

  def create
    @coliving = Coliving.create(coliving_params)
    render json: @coliving
  end

  private

  def coliving_params
    params.required(:coliving).permit(:name, :location, :website, :about, :rating)
  end

end
