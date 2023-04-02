chrome.runtime.onInstalled.addListener(() => {
    console.log("Switchboard extension installed!");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "switch") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const currentUrl = currentTab.url;
  
        if (currentUrl.startsWith("https://meet.google.com/")) {
          chrome.tabs.update(currentTab.id, { url: message.data });
        } else if (currentUrl.startsWith("https://app.slack.com/")) {
          chrome.tabs.executeScript({
            code: `
              const videoBtn = document.querySelector("[data-qa='video_icon']");
              if (videoBtn) {
                videoBtn.click();
              }
              setTimeout(() => {
                const joinBtn = document.querySelector("[data-qa='call_join_button']");
                if (joinBtn) {
                  joinBtn.click();
                  setTimeout(() => {
                    const urlInput = document.querySelector(".p-input--inline");
                    if (urlInput) {
                      urlInput.value = "${message.data}";
                      urlInput.dispatchEvent(new Event("input"));
                      urlInput.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 13 }));
                    }
                  }, 500);
                }
              }, 500);
            `
          });
        } else {
          alert("Switchboard does not support this video calling platform.");
        }
      });
    }
  });