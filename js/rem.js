// rem.js
(function(win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;
  function refreshRem() {
      var width = docEl.getBoundingClientRect().width; //注释1
      var rem = width / 10; //注释2
      docEl.style.fontSize = rem + 'px';
      document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + rem +"px";
      if(parseInt(rem) != parseInt(getComputedStyle(document.getElementsByTagName("html")[0]).fontSize)){ //注释3     
          var remtrue = rem*(rem/parseInt(getComputedStyle(document.getElementsByTagName("html")[0]).fontSize));
          docEl.style.fontSize = remtrue + 'px';
          document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + remtrue +"px";
      }
  }
  win.addEventListener('resize', function() { //注释4
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) { //注释5
      if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
      }
  }, false);
  refreshRem();
  document.addEventListener('DOMContentLoaded', refreshRem, false); //注释6
})(window);
