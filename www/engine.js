document.addEventListener("contextmenu", function(event){
    event.preventDefault();
}, false);

document.addEventListener("copy", (evt) => {
    evt.clipboardData.setData("text/plain", "");
       evt.preventDefault();
  }, false);