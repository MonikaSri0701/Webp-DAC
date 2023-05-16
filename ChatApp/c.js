function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();
  
    if (messageText !== '') {
      var timestamp = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
  
      var messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.innerHTML = '</span>' + messageText + '<span class="timestamp">' + timestamp;
  
      var chatbox = document.getElementById('chatbox');
      chatbox.appendChild(messageElement);

        messageInput.value = '';
      chatbox.scrollTop = 0; // Scroll to bottom
    }
  }
  