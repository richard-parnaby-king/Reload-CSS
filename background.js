/*
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */

//When user clicks on button, run script
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "contentscript.js"});
});