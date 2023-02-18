window.addEventListener("DOMContentLoaded", () => {
  const clockDiv = document.getElementById("clock");
  const dateDiv = document.getElementById("date");

  const websocket = new WebSocket("ws://localhost:5678/");

  websocket.onmessage = ({ data }) => {
    const formated = dayjs(data).add(1, "h").format("HHmmss");
    clockDiv.innerHTML = `<div class="digit">${formated[0]}</div>
    <div class="digit">${formated[1]}</div>
    <div class="dots">:</div><div class="digit">${formated[2]}</div>
    <div class="digit">${formated[3]}</div><div class="dots">:</div>
    <div class="digit">${formated[4]}</div>
    <div class="digit">${formated[5]}</div>`;
    dateDiv.innerHTML = `<div><div class="date inline">${dayjs(data).format(
      "DD"
    )}</div><div class="date inline">${dayjs(data).format(" MMMM")}</div></div>
    <div class="date">${dayjs(data).format("YYYY")}</div>
    `;
  };
});
