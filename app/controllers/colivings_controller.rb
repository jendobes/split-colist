class ColivingsController < ApplicationController

  def index
    @colivings = Coliving.all
    render json: @colivings.to_json(include: :comments)
  end

  def show
    @coliving = Coliving.find(params: id)
    render json: @coliving
  end

end
