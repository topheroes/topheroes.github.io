function done(){var o=document.getElementById("ppreloader");o.classList.contains("done")||o.classList.add("done")}setTimeout(function(){for(var o=document.images,e=o.length,n=0,s=0;s<e;s++){var t=new Image;t.src=o[s].src,t.onload=c,t.onerror=c}function c(){console.log(n),++n==e&&done()}console.log(e)},1e3);