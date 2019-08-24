class ChatsController < ApplicationController
  def room
    @messages = Message.all
  end
end
