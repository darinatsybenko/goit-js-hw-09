!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;function o(t){document.body.style.backgroundColor=t()}function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}document.body.style.transition="background-color 500ms",t.startBtn.addEventListener("click",(function(){n=setInterval(o,1e3,e),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.8c2d3d18.js.map
