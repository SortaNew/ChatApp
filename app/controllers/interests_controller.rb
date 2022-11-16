class InterestsController < ApplicationController

    def index
        interests = Interest.all
        render json: interests, status: :ok    
    end

    def create
        interest = Interest.create(name: params[:name], user_id: params[:user_id])
        if interest.valid?
            render json: interest, status: :created
        else
            render json: { errors: interest.errors }, status: :unprocessable_entity
        end 
    end

end