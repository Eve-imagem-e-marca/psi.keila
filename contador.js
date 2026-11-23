(function(){var GC="";
if(!GC)return;
if(/estudio|contatos|conteudo|prontuario/.test(location.pathname))return;
var s=document.createElement("script");s.async=true;s.src="https://gc.zgo.at/count.js";s.setAttribute("data-goatcounter","https://"+GC+".goatcounter.com/count");
s.onload=function(){try{var sa=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone;if(sa)goatcounter.count({path:"abriu-pelo-icone",title:"Abriu pelo icone (app instalado)",event:true})}catch(e){}};
document.head.appendChild(s);
window.addEventListener("appinstalled",function(){try{goatcounter.count({path:"instalou-o-app",title:"Instalou o app",event:true})}catch(e){}})})();
