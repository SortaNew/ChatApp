class FriendshipsController < ApplicationController

    def index
        friendships = Friendship.all
        render json: friendships, status: :ok
    end
    
    def create
        friendship = Friendship.create(user_id: params[:user_id], friend_id: params[:friend_id], status: params[:status])
        render json: friendship, status: :created
    end
end