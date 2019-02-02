/**
 * Leftify(https://github.com/wtetsu/leftify/)
 * Copyright 2019-present wtetsu
 * Licensed under MIT
 */

const main = async () => {
  let _active = true;

  // Fetch the current status
  chrome.runtime.sendMessage({ type: "isActive" }, response => {
    if (typeof response.isActive === "boolean") {
      _active = response.isActive;
    }
  });

  // Update the status
  chrome.runtime.onMessage.addListener(request => {
    if (typeof request.active === "boolean") {
      _active = request.active;
    }
  });

  setInterval(() => {
    if (_active) {
      const element = document.getElementById("sbo-rt-content");
      if (element) {
        element.style.marginLeft = 0;
      }
    }
  }, 100);
};

main();
