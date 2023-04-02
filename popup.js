document.addEventListener('DOMContentLoaded', () => {
    const googleMeetButton = document.getElementById('google-meet');
    const skypeButton = document.getElementById('skype');
    const zoomButton = document.getElementById('zoom');
  
    googleMeetButton.addEventListener('click', () => {
      chrome.runtime.sendMessage({ platform: 'google-meet' }, function (response) {
        if (chrome.runtime.lastError) {
          console.error("Error:", chrome.runtime.lastError);
        } else if (response && response.message) {
          console.log(response.message);
        } else {
          console.error("Error: Invalid response from background script.");
        }
      });
    });
  
    skypeButton.addEventListener('click', () => {
      setTimeout(() => {
        chrome.runtime.sendMessage({ platform: "skype" }, function (response) {
          if (chrome.runtime.lastError) {
            console.error("Error:", chrome.runtime.lastError);
          } else if (response && response.message) {
            console.log(response.message);
          } else {
            console.error("Error: Invalid response from background script.");
          }
        });
      }, 5000); // delay of 5 seconds before sending the message
    });
  
    zoomButton.addEventListener('click', () => {
      chrome.runtime.sendMessage({ platform: 'zoom' }, function (response) {
        if (chrome.runtime.lastError) {
          console.error("Error:", chrome.runtime.lastError);
        } else if (response && response.message) {
          console.log(response.message);
        } else {
          console.error("Error: Invalid response from background script.");
        }
      });
    });
  });