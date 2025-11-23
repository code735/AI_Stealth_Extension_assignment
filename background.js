chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("msg",msg)
  if (msg.type === "CONTENT_READY") {
    console.log("script loaded")
  }
});
    console.log("script loaded")
