// Enter the url you want to block in form of syntax *://*.URL/*,
const block = [
	"*://*.doubleclick.net/*",
    "*://*.instagram.com/*",
    "*://*.netflix.com/*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: block },
    ["blocking"]
)

