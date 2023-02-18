window.addEventListener("DOMContentLoaded", () => {
  const messages = document.createElement("ul");
  document.body.appendChild(messages);

  const websocket = new WebSocket("ws://localhost:5678/");

  websocket.onmessage = ({ data }) => {
    const message = document.createElement("li");
    const content = document.createTextNode(
      dayjs(data).format("hh:mm:ss__DD-MM-YYYY")
    );
    message.appendChild(content);
    messages.appendChild(message);
  };
});
