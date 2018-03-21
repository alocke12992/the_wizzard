class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def update
    user = User.find(params[:id])
    user.name = params[:name]
    user.email = params[:email]
    user.gamertag = params[:gamertag]
    s3 = Aws::S3::Resource.new(region: ENV['AWS_REGION']) 
    s3_bucket = ENV['BUCKET']
    file = params[:file]
  end
end
