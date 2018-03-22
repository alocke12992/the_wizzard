class Api::TagsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Tags.all
  end

  def show
    @tag = Tag.find(params[:id])
    render json: @tag
  end

  def create 
    name = params[:tag][:name]
    tag = Tag.find_or_create_by(name: name)
    if !current_user.tags.find_by(id: tag.id)
      Tagging.create(user_id: current_user.id, tag_id: tag.id)
      render json: tag
    end 
  end 

  def update
    
  end


end
