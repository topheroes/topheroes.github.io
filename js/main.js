jQuery.getScript("js/generated.js",function(){for(var e=document.getElementsByTagName("tr"),a=new Date,t=document.getElementsByTagName("figure"),n=0;n<t.length-1;n++){var i=document.createElement("img");i.src="https://gravatar.com/avatar/"+names[n].hash+"?s=100&d=https://topheroes.github.io/img/hs/"+(10-n)+"_min.png",i.alt="";var r=document.createElement("a");r.href="https://gravatar.com/avatar/"+names[n].hash+"?s=512&d=https://topheroes.github.io/img/hs/"+(10-n)+".gif",r.className="image-popup-no-margins",r.appendChild(i),t[n].appendChild(r)}$("table caption b .myspan").replaceWith("<span style='color:"+generatedDate.color+";'>обновлено "+generatedDate.date+"</span>");for(n=0;n<e.length;n++){var s=e[n].getElementsByTagName("td");s[0].innerHTML=names[0].name,s[1].innerHTML=names[0].score,names.shift()}var o=a.getDate()%31;imga.src="img/memes/"+["bobcat.jpg","cat_angry.png","cat_demon.jpg","cat_sitkh.jpeg","cat_smile2.jpg","cat_squarrel.jpeg","cat_wat.jpg","cat_weather.jpeg","cat_who_me.jpeg","cute_goat.jpg","die.jpg","diet.jpg","dog coat gun.jpg","dog_bear.gif","donttouch.jpg","drum cat.gif","ehehe.jpg","evil_dog.jpg","fox_plays.gif","nazivaet_nyashkoi.jpg","sea-lion.gif","sharik_gde_tabletki.jpg","teeth.jpg","terpenie.jpg","tiho.jpg","tolko_v_ad.jpg","twitter_serialy_eda.jpg","vivod.jpeg","viy.jpeg","vse_horosho.jpg","yoga_dog.gif"][o],$(document).ready(function(){$(".image-popup-no-margins").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}})})});for(var handler,canvas=document.getElementById("canvas"),context=canvas.getContext("2d"),maxFlakes=40,repeats=0,height=0,snowflakes=[],i=0;i<maxFlakes;i++){var radius=-i*i+10;snowflakes[i]={x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,radius:0<radius?radius:7*Math.random()+1}}function draw(){context.clearRect(0,0,canvas.width,canvas.height),repeats++;for(var e=0;e<maxFlakes;e++){var a=snowflakes[e];a.x>canvas.width+a.radius?a.x=1.5*-a.radius:a.x+=1.5*a.radius,a.y>canvas.height+a.radius?a.y=-a.radius:a.y+=a.radius,context.beginPath();var t=1.1-a.radius/10;context.fillStyle="rgba(255, 255, 255, "+t+")",context.arc(a.x,a.y,a.radius,0,2*Math.PI,!1),context.fill()}}function resize(){canvas.width=window.innerWidth,canvas.height=window.innerHeight,draw()}handler=setInterval(draw,30),resize(),window.addEventListener("resize",resize,!1);