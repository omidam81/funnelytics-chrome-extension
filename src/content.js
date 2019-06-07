/*global chrome*/
'use strict';
const DomOutline = function (options) {
  console.log('Inspector loaded');
  options = options || {};

  var pub = {};
  var self = {
    opts: {
      namespace: options.namespace || 'DomOutline',
      borderWidth: options.borderWidth || 2,
      onClick: options.onClick || false,
      filter: options.filter || false
    },
    keyCodes: {
      BACKSPACE: 8,
      ESC: 27,
      DELETE: 46
    },
    active: false,
    initialized: false,
    elements: {}
  };

  function writeStylesheet(css) {
    var element = document.createElement('style');
    element.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(element);

    if (element.styleSheet) {
      element.styleSheet.cssText = css; // IE
    } else {
      element.innerHTML = css; // Non-IE
    }
  }

  function initStylesheet() {
    if (self.initialized !== true) {
      var css =
        '' +
        '.' +
        self.opts.namespace +
        ' {' +
        '    background: #09c;' +
        '    position: absolute;' +
        '    z-index: 1000000;' +
        '}' +
        '.' +
        self.opts.namespace +
        '_label {' +
        '    background: #09c;' +
        '    border-radius: 2px;' +
        '    color: #fff;' +
        '    font: bold 12px/12px Helvetica, sans-serif;' +
        '    padding: 4px 6px;' +
        '    position: absolute;' +
        '    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);' +
        '    z-index: 1000001;' +
        '}';

      writeStylesheet(css);
      self.initialized = true;
    }
  }

  function createOutlineElements() {
    self.elements.label = window.$('<div></div>')
      .addClass(self.opts.namespace + '_label')
      .appendTo('body');
    self.elements.top = window.$('<div></div>')
      .addClass(self.opts.namespace)
      .appendTo('body');
    self.elements.bottom = window.$('<div></div>')
      .addClass(self.opts.namespace)
      .appendTo('body');
    self.elements.left = window.$('<div></div>')
      .addClass(self.opts.namespace)
      .appendTo('body');
    self.elements.right = window.$('<div></div>')
      .addClass(self.opts.namespace)
      .appendTo('body');
  }

  function removeOutlineElements() {
    window.$.each(self.elements, function (name, element) {
      element.remove();
    });
  }

  function compileLabelText(element, width, height) {
    var label = element.tagName.toLowerCase();
    if (element.id) {
      label += '#' + element.id;
    }
    if (element.className) {
      label += (
        '.' + window.$.trim(element.className).replace(/ /g, '.')
      ).replace(/\.\.+/g, '.');
    }
    return label + ' (' + Math.round(width) + 'x' + Math.round(height) + ')';
  }

  function getScrollTop() {
    if (!self.elements.window) {
      self.elements.window = window.$(window);
    }
    return self.elements.window.scrollTop();
  }

  function updateOutlinePosition(e) {
    if (e.target.className.indexOf(self.opts.namespace) !== -1) {
      return;
    }
    if (self.opts.filter) {
      if (!window.$(e.target).is(self.opts.filter)) {
        return;
      }
    }
    pub.element = e.target;

    var b = self.opts.borderWidth;
    var scroll_top = getScrollTop();
    var pos = pub.element.getBoundingClientRect();
    var top = pos.top + scroll_top;

    var label_text = compileLabelText(pub.element, pos.width, pos.height);
    var label_top = Math.max(0, top - 20 - b, scroll_top);
    var label_left = Math.max(0, pos.left - b);

    self.elements.label
      .css({ top: label_top, left: label_left })
      .text(label_text);
    self.elements.top.css({
      top: Math.max(0, top - b),
      left: pos.left - b,
      width: pos.width + b,
      height: b
    });
    self.elements.bottom.css({
      top: top + pos.height,
      left: pos.left - b,
      width: pos.width + b,
      height: b
    });
    self.elements.left.css({
      top: top - b,
      left: Math.max(0, pos.left - b),
      width: b,
      height: pos.height + b
    });
    self.elements.right.css({
      top: top - b,
      left: pos.left + pos.width,
      width: b,
      height: pos.height + b * 2
    });
  }

  function stopOnEscape(e) {
    if (
      e.keyCode === self.keyCodes.ESC ||
      e.keyCode === self.keyCodes.BACKSPACE ||
      e.keyCode === self.keyCodes.DELETE
    ) {
      pub.stop();
    }

    return false;
  }

  function clickHandler(e) {
    pub.stop();
    self.opts.onClick(pub.element);

    return false;
  }

  pub.start = function () {
    initStylesheet();
    if (self.active !== true) {
      self.active = true;
      createOutlineElements();
      window.$('body').on(
        'mousemove.' + self.opts.namespace,
        updateOutlinePosition
      );
      window.$('body').on('keyup.' + self.opts.namespace, stopOnEscape);
      if (self.opts.onClick) {
        setTimeout(function () {
          window.$('body').on('click.' + self.opts.namespace, function (e) {
            if (self.opts.filter) {
              if (!window.$(e.target).is(self.opts.filter)) {
                return false;
              }
            }
            clickHandler.call(this, e);
          });
        }, 50);
      }
    }
  };

  pub.stop = function () {
    self.active = false;
    removeOutlineElements();
    window.$('body')
      .off('mousemove.' + self.opts.namespace)
      .off('keyup.' + self.opts.namespace)
      .off('click.' + self.opts.namespace);
  };

  return pub;
};
//import { DomOutline } from '../public/inspector.js';

//alert("Hello from your Chrome extension!");
//import { Inspector} from '../public/inspector.js';
var myExampleClickHandler = function (element) { console.log('Clicked element:', element); }
console.log('content loaded');
console.log('DomOutline::', DomOutline);
//chrome.tabs.executeScript(null, { file: "inspector.js" });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    console.log('Here:::');
    var myDomOutline = DomOutline({
      onClick: myExampleClickHandler,
      filter: '*'
    });
     myDomOutline.start();
    // myDomOutline.stop();
    //console.log('firstHref',firstHref);
  }
});
