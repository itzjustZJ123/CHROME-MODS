(function () {
  var scripts = [
    {
      name: 'Rainbow',
      action: function () {
        javascript:var addingfiltertransition = document.body.style.transition = "filter 1s"; var hueInterval = setInterval(function() {var filterchange0 = document.body.style.filter = "hue-rotate(0deg)"; setTimeout(function() {var filterchange90 = document.body.style.filter = "hue-rotate(90deg)"; setTimeout(function() {var filterchange180 = document.body.style.filter = "hue-rotate(180deg)"; setTimeout(function() {var filterchange270 = document.body.style.filter = "hue-rotate(270deg)"; setTimeout(function() {var filterchange360 = document.body.style.filter = "hue-rotate(360deg)";}, 1000);}, 1000);}, 1000);}, 1000);}, 4000);
      }
    },
    {
      name: 'Crazy Spin',
      action: function () {
        javascript:var foo = document.createElement("link"); document.head.appendChild(foo); foo.setAttribute("rel", "stylesheet"); foo.setAttribute("href", "https://cerebraldatabank.neocities.org/cool_css.css"); for (var i = 0; i < document.querySelectorAll("*").length; i++) {if (i & 1) {document.querySelectorAll("*")[i].classList.add("gogo-spin-backwards");} else {document.querySelectorAll("*")[i].classList.add("gogo-spin");}}
      }
    },
    {
      name: 'Fake Error',
      action: function () {
        javascript: (function() {let imageUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/error.png";function spawnImage() {let img = new Image();img.src = imageUrl;img.style.position = 'fixed';img.style.zIndex = '9999';img.onload = function() {let randomTop = Math.floor(Math.random() * (window.innerHeight - img.height));let randomLeft = Math.floor(Math.random() * (window.innerWidth - img.width));img.style.top = randomTop + 'px';img.style.left = randomLeft + 'px';document.body.appendChild(img);};}setInterval(spawnImage, 8000);})();
      }
    },
    {
      name: '”youareanidiot.org”',
      action: function () {
        javascript:(function() { function mainFunction() { var videoId = 'dPtXaAZHuho'; var iframe = document.createElement('iframe'); iframe.width = '0'; iframe.height = '0'; iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&loop=1&playlist=%27 + videoId; iframe.allow = %27autoplay%27; iframe.style.border = %27none%27; iframe.style.position = %27fixed%27; iframe.style.bottom = %270%27; iframe.style.right = %270%27; document.body.appendChild(iframe); var imageUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/yournotsmart.gif"; var windowBgUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/window.png"; function createBouncingWindow() { var winDiv = document.createElement(%27div%27); winDiv.style.position = %27fixed%27; winDiv.style.bottom = %270%27; winDiv.style.left = %270%27; winDiv.style.width = %27220px%27; winDiv.style.height = %27200px%27; winDiv.style.backgroundImage = %27url(%27 + windowBgUrl + %27)%27; winDiv.style.backgroundSize = %27100% 100%%27; winDiv.style.backgroundRepeat = %27no-repeat%27; winDiv.style.backgroundPosition = %27center%27; winDiv.style.zIndex = %279999%27; var img = document.createElement(%27img%27); img.src = imageUrl; img.style.position = %27relative%27; img.style.top = %2724%%27; img.style.left = %2713.5%%27; img.style.width = %2770%%27; img.style.height = %2760%%27; winDiv.appendChild(img); document.body.appendChild(winDiv); var deltaX = (Math.random() * 7) + 3; var deltaY = (Math.random() * 7) + 3; winDiv.addEventListener(%27click%27, function(event) { for (var i = 0; i < 5; i++) { createBouncingWindow(); } }); function animate() { var rect = winDiv.getBoundingClientRect(); if (rect.left + rect.width > window.innerWidth || rect.left < 0) { deltaX = -deltaX; } if (rect.top + rect.height > window.innerHeight || rect.top < 0) { deltaY = -deltaY; } winDiv.style.left = rect.left + deltaX + %27px%27; winDiv.style.top = rect.top + deltaY + %27px%27; requestAnimationFrame(animate); } animate(); } createBouncingWindow(); } if (!localStorage.getItem(%27scriptActivated%27)) { localStorage.setItem(%27scriptActivated%27, %27true%27); mainFunction(); } else { mainFunction(); } window.addEventListener(%27beforeunload%27, function() { localStorage.removeItem(%27scriptActivated%27); }); })();
      }
    },
    {
      name: 'Edit Webpage',
      action: function () {
        javascript:var addingcontenteditableattributeequalstrue = document.body.contentEditable = true; var nospellcheckonbody = document.body.spellcheck = false;
      }
    },
    {
      name: 'Save Edits',
      action: function () {
        javascript:var addingcontenteditableattributeequalsfalse = document.body.contentEditable = false;
      }
    },
    {
      name: 'Auto Clicker',
      action: function () {
        javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);
      }
    },
    {
      name: 'Spin Images',
      action: function () {
        javascript:(function() {
  var images = document.querySelectorAll('img');
  images.forEach(function(image) {
    image.style.transition = 'transform 2s linear infinite';
    image.style.animation = 'spin 2s linear infinite';
  });

  var styles = document.createElement('style');
  styles.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
  document.head.appendChild(styles);
})();

      }
    },
    {
      name: 'Flip Screen 180',
      action: function () {
        javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}())
      }
    },
    {
      name: 'YOU JUST GOT COCONUT MALLED',
      action: function () {
        javascript:(function() {  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);  var replacementImageUrl = 'https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/donkey.jpeg';  while (walker.nextNode()) {    var node = walker.currentNode;    node.textContent = "You just got coconut malled!";  }  var images = document.getElementsByTagName('img');  for (var i = 0; i < images.length; i++) {    images[i].src = replacementImageUrl;  }})();
      }
    }
  ];


  var menu = document.createElement('div');
  menu.style.position = 'fixed';
  menu.style.top = '10px';
  menu.style.right = '10px';
  menu.style.zIndex = '9999';
  menu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  menu.style.border = '1px solid #fff';
  menu.style.padding = '10px';
  menu.style.borderRadius = '10px';
  menu.style.color = '#fff';


  scripts.forEach(function (scriptObj) {
    var button = document.createElement('button');
    button.innerText = '' + scriptObj.name;
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '5px 10px';
    button.style.margin = '5px 0';
    button.style.borderRadius = '5px';


    button.onclick = function () {
      scriptObj.action();
    };


    menu.appendChild(button);
  });


  var closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.backgroundColor = '#dc3545';
  closeButton.style.color = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.padding = '5px 10px';
  closeButton.style.margin = '10px 0';
  closeButton.style.borderRadius = '5px';


  closeButton.onclick = function () {
    document.body.removeChild(menu);
  };


  menu.appendChild(closeButton);
  document.body.appendChild(menu);
})();




