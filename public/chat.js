const socket = io();

const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('messages');
const sendButton = document.getElementById('send-button');
const usernameInput = document.getElementById('username');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  const username = usernameInput.value;
  if (message && username) {
    socket.emit('chat message', { message, username });
    messageInput.value = '';
  }
});

socket.on('chat message', (data) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${data.username}: ${data.message}`;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});

