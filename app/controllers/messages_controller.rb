class MessagesController < ApplicationController

    def index
        render json: Message.all.map { |m| {content: m.content, user: m.user, created_at: m.created_at} }
    end
end
