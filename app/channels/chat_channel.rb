class ChatChannel < ApplicationCable::Channel

    def subscribed
      stream_from "chat_#{params[:room]}"
      ActionCable.server.broadcast("chat_#{params[:room]}", { content: "#{current_user.username} has entered the #{params[:room]}", user: current_user })
    end
  
    def receive(data)
      message = Message.create(content: data['content'], user: current_user)
      ActionCable.server.broadcast("chat_#{params[:room]}", {content: data['content'], user: current_user, created_at: message.created_at})
    end
  
    def unsubscribed
      ActionCable.server.broadcast("chat_#{params[:room]}", { content: "#{current_user.username} has left the #{params[:room]}", user: current_user })
    end
  
end