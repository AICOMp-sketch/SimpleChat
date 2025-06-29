const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const messageInput = document.getElementById('message-input');

  // Append a message to chat area
  function appendMessage(text, type = 'sent') {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', type);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Handle form submit (send message)
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message === '') return;
    appendMessage(message, 'sent');
    messageInput.value = '';
    messageInput.focus();

    // Simulate a simple bot reply after 1 second
    setTimeout(() => {
      appendMessage("Echo: " + message, 'received');
    }, 1000);
  });