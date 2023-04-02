// Get the Google Meet, Skype, and Zoom buttons
const googleMeetButton = document.querySelector('#google-meet');
const skypeButton = document.querySelector('#skype');
const zoomButton = document.querySelector('#zoom');

// Function to switch to Google Meet
function switchToGoogleMeet() {
  chrome.runtime.sendMessage({ platform: 'google-meet' }, function (response) {
    console.log(response.message);
  });
}

// Function to switch to Skype
function switchToSkype() {
  chrome.runtime.sendMessage({ platform: 'skype' }, function (response) {
    console.log(response.message);
  });
}

// Function to switch to Zoom
function switchToZoom() {
  chrome.runtime.sendMessage({ platform: 'zoom' }, function (response) {
    console.log(response.message);
  });
}

// Add event listeners to the buttons
if (googleMeetButton) {
  googleMeetButton.addEventListener('click', switchToGoogleMeet);
}

if (skypeButton) {
  skypeButton.addEventListener('click', switchToSkype);
}

if (zoomButton) {
  zoomButton.addEventListener('click', switchToZoom);
}
