chrome.contextMenus.create({
  id: "Webcache",
  title: "Webcache",
  contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Webcache") {
    const selectedText = new URL(tab.url).href.replace(/^https?:\/\//, '');
    const archiveUrl = `https://webcache.googleusercontent.com/search?q=cache:${selectedText}`
    chrome.tabs.create({ url: archiveUrl });
  }
});
