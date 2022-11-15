class SessionsController < ApplicationController
  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        cookies.encrypted[:user_id] = user.id
        render json: user
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
  end
