let pressedCMD = false;

// =========================
//  BUTTON START
// =========================

document
  .getElementById("btn_START")
  .addEventListener("mousedown", onTouchTrueSTART);
document
  .getElementById("btn_START")
  .addEventListener("touchstart", onTouchTrueSTART);
document
  .getElementById("btn_START")
  .addEventListener("mouseup", onTouchFalseSTART);
document
  .getElementById("btn_START")
  .addEventListener("touchend", onTouchFalseSTART);
document.getElementById("btn_START").addEventListener("mouseleave", (e) => {
  if (pressedCMD) {
    onTouchFalseSTART(e);
  }
});

function onTouchTrueSTART(event) {
  event.preventDefault();
  var url = "IOWriteStart.html";
  var name = '"HMI_PLC".FromHMI.Command.Start';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = true;
}

function onTouchFalseSTART(event) {
  event.preventDefault();
  var url = "IOWriteStart.html";
  var name = '"HMI_PLC".FromHMI.Command.Start';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = false;
}

// =========================
//  BUTTON STOP
// =========================

document
  .getElementById("btn_STOP")
  .addEventListener("mousedown", onTouchTrueSTOP);
document
  .getElementById("btn_STOP")
  .addEventListener("touchstart", onTouchTrueSTOP);
document
  .getElementById("btn_STOP")
  .addEventListener("mouseup", onTouchFalseSTOP);
document
  .getElementById("btn_STOP")
  .addEventListener("touchend", onTouchFalseSTOP);
document.getElementById("btn_STOP").addEventListener("mouseleave", (e) => {
  if (pressedCMD) {
    onTouchFalseSTOP(e);
  }
});

function onTouchTrueSTOP(event) {
  event.preventDefault();
  var url = "IOWriteStop.html";
  var name = '"HMI_PLC".FromHMI.Command.Stop';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = true;
}

function onTouchFalseSTOP(event) {
  event.preventDefault();
  var url = "IOWriteStop.html";
  var name = '"HMI_PLC".FromHMI.Command.Stop';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = false;
}

// =========================
//  BUTTON RESET
// =========================

document
  .getElementById("btn_RESET")
  .addEventListener("mousedown", onTouchTrueRESET);
document
  .getElementById("btn_RESET")
  .addEventListener("touchstart", onTouchTrueRESET);
document
  .getElementById("btn_RESET")
  .addEventListener("mouseup", onTouchFalseRESET);
document
  .getElementById("btn_RESET")
  .addEventListener("touchend", onTouchFalseRESET);
document.getElementById("btn_RESET").addEventListener("mouseleave", (e) => {
  if (pressedCMD) {
    onTouchFalseRESET(e);
  }
});

function onTouchTrueRESET(event) {
  event.preventDefault();
  var url = "IOWriteReset.html";
  var name = '"HMI_PLC".FromHMI.Command.Reset';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = true;
}

function onTouchFalseRESET(event) {
  event.preventDefault();
  var url = "IOWriteReset.html";
  var name = '"HMI_PLC".FromHMI.Command.Reset';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
  pressedCMD = false;
}

// =========================
//  BUTTONS MANUAL/AUTOMATIC
// =========================

document
  .getElementById("btn_Manual")
  .addEventListener("mousedown", onTouchMANUAL);
document
  .getElementById("btn_Manual")
  .addEventListener("touchstart", onTouchMANUAL);

document
  .getElementById("btn_Automatic")
  .addEventListener("mousedown", onTouchAUTOMATIC);
document
  .getElementById("btn_Automatic")
  .addEventListener("touchstart", onTouchAUTOMATIC);

function onTouchMANUAL(event) {
  event.preventDefault();
  var url = "IOWriteManAuto.html";
  var name = '"HMI_PLC".FromHMI.Command.SelManAuto';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);

}

function onTouchAUTOMATIC(event) {
  event.preventDefault();
  var url = "IOWriteManAuto.html";
  var name = '"HMI_PLC".FromHMI.Command.SelManAuto';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);

}
