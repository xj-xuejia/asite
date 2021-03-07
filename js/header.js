
    window.addEventListener('load', function () {
      if (window.innerWidth >= 1920) {
        var logo = document.querySelectorAll(".banner .center .top .logo")
        var ul = document.querySelectorAll(".banner .center .top ul")
        for (var i = 0; i < logo.length; i++) {
          logo[i].style.padding = "20px 100% 20px 480px"
          ul[i].style.padding = "17px 276px 20px 18px"
        }
      } else if (window.innerWidth > 1120 && window.innerWidth < 1400) {
        var logo = document.querySelectorAll(".banner .center .top .logo")
        var ul = document.querySelectorAll(".banner .center .top ul")
        for (var i = 0; i < logo.length; i++) {
          logo[i].style.padding = "20px 100% 20px 75px"
          ul[i].style.padding = "17px 36px 20px 18px"
        }
      } else if (window.innerWidth >= 1400 && window.innerWidth < 1920) {
        var logo = document.querySelectorAll(".banner .center .top .logo")
        var ul = document.querySelectorAll(".banner .center .top ul")
        for (var i = 0; i < logo.length; i++) {
          logo[i].style.padding = "20px 100% 20px 240px"
          ul[i].style.padding = "17px 100px 20px 18px"
        }
      }
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1920) {
          var logo = document.querySelectorAll(".banner .center .top .logo")
          var ul = document.querySelectorAll(".banner .center .top ul")
          for (var i = 0; i < logo.length; i++) {
            logo[i].style.padding = "14px 100% 14px 480px"
            ul[i].style.padding = "17px 276px 20px 18px"
          }
        } else if (window.innerWidth > 1120 && window.innerWidth < 1400) {
          var logo = document.querySelectorAll(".banner .center .top .logo")
          var ul = document.querySelectorAll(".banner .center .top ul")
          for (var i = 0; i < logo.length; i++) {
            logo[i].style.padding = "20px 100% 20px 75px"
            ul[i].style.padding = "17px 36px 20px 18px"
          }
        } else if (window.innerWidth >= 1400 && window.innerWidth < 1920) {
          var logo = document.querySelectorAll(".banner .center .top .logo")
          var ul = document.querySelectorAll(".banner .center .top ul")
          for (var i = 0; i < logo.length; i++) {
            logo[i].style.padding = "20px 100% 20px 240px"
            ul[i].style.padding = "17px 100px 20px 18px"
          }
        }
      })
    })

// 根据浏览器关键字的位置，控制标题css字体样式大小加粗
var index = 0, call = 1, sounds = 2, message = 3, private = 4, marketing = 5, gratis = 6, jishu = 7, about = 8;
var test = window.location.href
var a = document.querySelectorAll(".top ul li a")
for (var i = 0; i < a.length; i++) {
  if (test.indexOf("index") !== -1) {
    var o = test.substring(test.indexOf("index")).substring(0, 5);
    if (o === "index") {
      a[index].className = "active-a"
    }
  }
  if (test.indexOf("call") !== -1) {
    var o = test.substring(test.indexOf("call")).substring(0, 4);
    if (o === "call") {
      a[call].className = "active-a"
    }
  }
  if (test.indexOf("sounds") !== -1) {
    var o = test.substring(test.indexOf("sounds")).substring(0, 6);
    if (o === "sounds") {
      a[sounds].className = "active-a"
    }
  }
  if (test.indexOf("message") !== -1) {
    var o = test.substring(test.indexOf("message")).substring(0, 7);
    if (o === "message") {
      a[message].className = "active-a"
    }
  }
  if (test.indexOf("private") !== -1) {
    var o = test.substring(test.indexOf("private")).substring(0, 7);
    if (o === "private") {
      a[private].className = "active-a"
    }
  }
  if (test.indexOf("marketing") !== -1) {
    var o = test.substring(test.indexOf("marketing")).substring(0, 9);
    if (o === "marketing") {
      a[marketing].className = "active-a"
    }
  }
  if (test.indexOf("gratis") !== -1) {
    var o = test.substring(test.indexOf("gratis")).substring(0, 6);
    if (o === "gratis") {
      a[gratis].className = "active-a"
    }
  }
  if (test.indexOf("jishu") !== -1) {
    var o = test.substring(test.indexOf("jishu")).substring(0, 5);
    if (o === "jishu") {
      a[jishu].className = "active-a"
    }
  }
  if (test.indexOf("about") !== -1) {
    var o = test.substring(test.indexOf("about")).substring(0, 5);
    if (o === "about") {
      a[about].className = "active-a"
    }
  }
}
// 监听滚动条，导航栏未吸顶时，选中单位为加粗白体，吸顶时选中单位为加粗#0072ff
window.onscroll = function () {
  if (document.documentElement.scrollTop === 0) {
    var logo = document.querySelectorAll(".banner .center .top .logo")
    var ul = document.querySelectorAll(".banner .center .top ul")
    var li = document.querySelectorAll(".banner .center .top ul li")
    var a = document.querySelectorAll(".banner .center .top ul li a")
    var button = document.querySelectorAll(".banner .center .top button")
    for (var i = 0; i < logo.length; i++) {
      logo[i].style.background = "transparent"
      logo[i].src = "../image/logo.png"
      logo[i].style.width = "210px"
      ul[i].style.background = "transparent"
      button[i].style.background = "transparent"
      button[i].style.color = "white"
    }
    for(var i = 0; i < li.length; i++){
      a[i].style.color = "#e7e7e7bf"
    }
    var index = 0, call = 1, sounds = 2, message = 3, private = 4, marketing = 5, gratis = 6, jishu = 7, about = 8;
    var test = window.location.href
    var a = document.querySelectorAll(".top ul li a")
    for (var i = 0; i < a.length; i++) {
      if (test.indexOf("index") !== -1) {
        var o = test.substring(test.indexOf("index")).substring(0, 5);
        if (o === "index") {
          a[index].className = "active-a"
        }
      }
      if (test.indexOf("call") !== -1) {
        var o = test.substring(test.indexOf("call")).substring(0, 4);
        if (o === "call") {
          a[call].className = "active-a"
        }
      }
      if (test.indexOf("sounds") !== -1) {
        var o = test.substring(test.indexOf("sounds")).substring(0, 6);
        if (o === "sounds") {
          a[sounds].className = "active-a"
        }
      }
      if (test.indexOf("message") !== -1) {
        var o = test.substring(test.indexOf("message")).substring(0, 7);
        if (o === "message") {
          a[message].className = "active-a"
        }
      }
      if (test.indexOf("private") !== -1) {
        var o = test.substring(test.indexOf("private")).substring(0, 7);
        if (o === "private") {
          a[private].className = "active-a"
        }
      }
      if (test.indexOf("marketing") !== -1) {
        var o = test.substring(test.indexOf("marketing")).substring(0, 9);
        if (o === "marketing") {
          a[marketing].className = "active-a"
        }
      }
      if (test.indexOf("gratis") !== -1) {
        var o = test.substring(test.indexOf("gratis")).substring(0, 6);
        if (o === "gratis") {
          a[gratis].className = "active-a"
        }
      }
      if (test.indexOf("jishu") !== -1) {
        var o = test.substring(test.indexOf("jishu")).substring(0, 5);
        if (o === "jishu") {
          a[jishu].className = "active-a"
        }
      }
      if (test.indexOf("about") !== -1) {
        var o = test.substring(test.indexOf("about")).substring(0, 5);
        if (o === "about") {
          a[about].className = "active-a"
        }
      }
    }
  }else if(document.documentElement.scrollTop > 0){
    var logo = document.querySelectorAll(".banner .center .top .logo")
    var ul = document.querySelectorAll(".banner .center .top ul")
    var li = document.querySelectorAll(".banner .center .top ul li")
    var a = document.querySelectorAll(".banner .center .top ul li a")
    var button = document.querySelectorAll(".banner .center .top button")
    for (var i = 0; i < logo.length; i++) {
      logo[i].style.background = "white"
      logo[i].src = "../image/logo-inner.png"
      logo[i].style.width = "210px"
      ul[i].style.background = "white"
      button[i].style.background = "white"
      button[i].style.color = "black"
    }
    for(var i = 0; i < li.length; i++){
      a[i].style.color = "black"
    }
    var index = 0, call = 1, sounds = 2, message = 3, private = 4, marketing = 5, gratis = 6, jishu = 7, about = 8;
    var test = window.location.href
    var a = document.querySelectorAll(".top ul li a")
    for (var i = 0; i < a.length; i++) {
      if (test.indexOf("index") !== -1) {
        var o = test.substring(test.indexOf("index")).substring(0, 5);
        if (o === "index") {
          a[index].className = "active-b"
        }
      }
      if (test.indexOf("call") !== -1) {
        var o = test.substring(test.indexOf("call")).substring(0, 4);
        if (o === "call") {
          a[call].className = "active-b"
        }
      }
      if (test.indexOf("sounds") !== -1) {
        var o = test.substring(test.indexOf("sounds")).substring(0, 6);
        if (o === "sounds") {
          a[sounds].className = "active-b"
        }
      }
      if (test.indexOf("message") !== -1) {
        var o = test.substring(test.indexOf("message")).substring(0, 7);
        if (o === "message") {
          a[message].className = "active-b"
        }
      }
      if (test.indexOf("private") !== -1) {
        var o = test.substring(test.indexOf("private")).substring(0, 7);
        if (o === "private") {
          a[private].className = "active-b"
        }
      }
      if (test.indexOf("marketing") !== -1) {
        var o = test.substring(test.indexOf("marketing")).substring(0, 9);
        if (o === "marketing") {
          a[marketing].className = "active-b"
        }
      }
      if (test.indexOf("gratis") !== -1) {
        var o = test.substring(test.indexOf("gratis")).substring(0, 6);
        if (o === "gratis") {
          a[gratis].className = "active-b"
        }
      }
      if (test.indexOf("jishu") !== -1) {
        var o = test.substring(test.indexOf("jishu")).substring(0, 5);
        if (o === "jishu") {
          a[jishu].className = "active-b"
        }
      }
      if (test.indexOf("about") !== -1) {
        var o = test.substring(test.indexOf("about")).substring(0, 5);
        if (o === "about") {
          a[about].className = "active-b"
        }
      }
    }
  }
}
// 根据需求来控制banner中的内容
function bannerNode(bgImg,imgNode, pNode, spanNode, aNode){
  var banner = document.querySelectorAll(".banner")
  var img = document.querySelectorAll(".d1-img")
  var p = document.querySelectorAll(".d1-p")
  var span = document.querySelectorAll(".d1-span")
  var a = document.querySelectorAll(".d1-a")
  for(var i=0;i<banner.length;i++){
    banner[i].style.backgroundImage = bgImg.bg
  }
  for(var i=0;i<img.length;i++){
    img[i].src = imgNode.iSrc
    img[i].style.display = imgNode.iStyle
  }
  for(var i=0;i<p.length;i++){
    p[i].innerHTML = pNode.pInner
    p[i].style.display = pNode.pStyle
  }
  for(var i=0;i<span.length;i++){
    span[i].innerHTML = spanNode.sInner
    span[i].style.display = spanNode.sStyle
  }
  for(var i=0;i<a.length;i++){
    a[i].style.display = aNode.aStyle
    a[i].href = aNode.aHref
    a[i].innerHTML = aNode.aText
  }
}
// 调用参数
// bannerNode(
//   { iSrc: "../image/index/shout.jpg", iStyle: "block" },
//   { pInner: "云通讯", pStyle: "block" },
//   { sInner: "yuntongxun", sStyle: "block" },
//   { aHref: "javascript:;", aStyle: "block", aText: "立即下载" }
// )
function addNode(Node,Title="innerHTML",Style="display:block",url="javascript:;",Class=""){
  var banner = document.querySelectorAll("#d1")
  var frag = document.createDocumentFragment();
  var node = document.createElement(Node);
  classArray=Class.split(",");
  for(var i=0;i < classArray.length;i++){
    node.classList.add(classArray[i])
  }
  node.innerText=Title;
  node.style = Style
  if(Node==="img"){
    node.src=url
  }else if(Node==="a"){
    node.href=url
  }
  frag.appendChild(node);
  for(var i=0;i<banner.length;i++){
    banner[i].appendChild(frag)
  }
}
// 调用参数
//         节点名       innerHTML          style      url      class       
//addNode("span", "高达99%到达率三网", "color:white;", "", "fadeInDownBig,wow")
// addNode("img", " ", "display:block", "./image/index/shout.jpg", "fadeInDownBig,wow")