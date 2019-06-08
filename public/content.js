/*global chrome*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('content listener');
  console.log('content Got sender',sender);
  if (request.message == 'clicked_browser_action') {
    console.log('Got Message');
    var myDomOutline = DomOutline({
      onClick: function(element) {
        console.log('Clicked element:', element);
        chrome.runtime.sendMessage({ message: 'xpath', inspect: element });
        //sendResponse({ message: element });
      },
      filter: '*'
    });
    myDomOutline.start();
    //myDomOutline.stop();
  }
  //sendResponse({ farewell: "goodbye" });
});
