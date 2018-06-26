class CommentsController < ApplicationController
  before_filter :get_parent

  def get_parent
    if params[:coliving_id]
      @parent = Coliving.find(params[:coliving_id])
    else params[:coworking_id]
      @parent = Coworking.find(params[:coworking_id])
    end
  end

  def index
    @parent ? @comments = @parent.comments : @comments = Comment.all
    render json: @comments
  end




end
