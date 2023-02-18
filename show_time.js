window.addEventListener("DOMContentLoaded", () => {
  const messages = document.createElement("ul");
  const clockDiv = document.getElementById("clock");
  const clock = document.createElement("h1");
  clock.setAttribute("class", "clock");
  clockDiv.appendChild(clock);
  document.body.appendChild(messages);

  const websocket = new WebSocket("ws://localhost:5678/");

  websocket.onmessage = ({ data }) => {
    clock.innerText = dayjs(data).format("hh:mm:ss");
    const message = document.createElement("li");
    const content = document.createTextNode(
      dayjs(data).format("hh:mm:ss__DD-MM-YYYY")
    );
    message.appendChild(content);
    messages.appendChild(message);
  };
});
