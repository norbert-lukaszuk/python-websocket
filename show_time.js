window.addEventListener("DOMContentLoaded", () => {
  const clockDiv = document.getElementById("clock");
  const dateDiv = document.getElementById("date");
  const tempDiv = document.getElementById("temperature");
  const tempValue = document.getElementById("tempValue");
  const humidValue = document.getElementById("humidValue");
  // const websocket = new WebSocket("ws://45.155.150.176:5678/");
  const websocket = new WebSocket(`ws://${window.location.hostname}:5678/`);

  websocket.onmessage = ({ data }) => {
    const resp = JSON.parse(data);
    console.log(resp);
    tempValue.innerText = resp.temp;
    humidValue.innerText = resp.humid + "%";
    // humidityDiv.innerHTML = ` <i class="ti ti-home"></i><i class="ti ti-temperature"></i> <p>${resp.temp}</p><i class="ti ti-temperature-celsius"></i>`;
    const formated = dayjs(resp.time).add(1, "h").format("HHmmss");
    clockDiv.innerHTML = `<div class="digit">${formated[0]}</div>
    <div class="digit">${formated[1]}</div>
    <div class="dots">:</div><div class="digit">${formated[2]}</div>
    <div class="digit">${formated[3]}</div><div class="dots">:</div>
    <div class="digit">${formated[4]}</div>
    <div class="digit">${formated[5]}</div>`;
    dateDiv.innerHTML = `<div><div class="date inline">${dayjs(
      resp.date
    ).format("DD")}</div><div class="date inline">${dayjs(resp.date).format(
      " MMMM"
    )}</div></div>
    <div class="date">${dayjs(resp.date).format("YYYY")}</div>
    `;
  };
});
