import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').append(data['message'])
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(message) {
    return this.perform('speak',{ message: message });
  }
});

$(document).on('keypress', '#chat_box', function(event){
  if(event.keyCode == 13) {
    consumer.subscriptions.subscriptions[0].speak(event.target.value)
  }

});
