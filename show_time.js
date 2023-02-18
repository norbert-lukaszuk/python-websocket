window.addEventListener("DOMContentLoaded", () => {
  const messages = document.createElement("ul");
  messages.setAttribute("id", "messages");
  const clockDiv = document.getElementById("clock");
  document.body.appendChild(messages);

  const websocket = new WebSocket("ws://localhost:5678/");

  websocket.onmessage = ({ data }) => {
    const formated = dayjs(data).format("hhmmss");
    clockDiv.innerHTML = `<div class="digit">${formated[0]}</div>
    <div class="digit">${formated[1]}</div>
    <span class="dots">:</span><div class="digit">${formated[2]}</div>
    <div class="digit">${formated[3]}</div>:
    <div class="digit">${formated[4]}</div>
    <div class="digit">${formated[5]}</div>
    
    `;
    const message = document.createElement("li");
    const content = document.createTextNode(
      //   dayjs(data).format("hh:mm:ss__DD-MM-YYYY")
      data
    );
    message.appendChild(content);
    messages.appendChild(message);
  };
});
