function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-data-stop]"),n=document.querySelector("body"),r=document.querySelector(".color");let c=null;const l=function(){n.style.backgroundColor=t(),n.style.color=t(),r.textContent=t()};e.addEventListener("click",(()=>{c=setInterval(l,1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(c),o.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8a92d477.js.map
