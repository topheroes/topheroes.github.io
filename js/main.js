for(var names=[{name:"Бжеников Артем",score:434,hash:"e72f2273c91ad68137a427fe9dd845ca"},{name:"Соин Вадим",score:333,hash:"96315218edd9b68d452444f890d9bba2"},{name:"Смывин Сергей",score:256,hash:"1a75fba0adf3d0e7d75b1c247cb65305"},{name:"Алябьев Илья",score:253,hash:"56e17affd53d2ad7678de9a26d5c8e34"},{name:"Иванов Владислав",score:202,hash:"b40cc6344e04b4e99cbc555c650ff1e2"},{name:"Котов Сергей",score:201,hash:"8bc74872cc521a38eb54a848bd296772"},{name:"Микейлов Кирилл",score:192,hash:"ee0324a5daccf59b7a5b740a16099ff7"},{name:"Ашкалов Янис",score:190,hash:"4d6fbc7b37545d805c9c40b0cc539c62"},{name:"Петров Сергей",score:171,hash:"64bb23ec90c4da2f6130b45917137f2d"},{name:"Задорожный Леонид",score:161,hash:"27f765a4b8aa6e732028d24a39106fdc"}],files=["friendly.png","FrwvyUJckVU.jpg","gaynigger.jpg","girl_afraid.jpg","goat_walk.jpg","good_night_monster.jpg","google.jpg","happy_dog.jpeg","hit the bear.gif","hitler_took.jpg","jhCga.gif","kangooroo_kool.jpg","kill_the_cat.gif","kitty.jpg","kotik_v_dome_programmista.jpg","lamb_look.gif","legs_dance2.gif","life_music.jpeg","math.jpg","monkey_suspects.jpg","natasha.jpg","net vandalizmu.jpeg","osoznal.jpg","owl.gif","owls.jpg","owls_little.jpg","owl_bath.jpg","parrot_talk_with.gif","petrosyan.gif","pig_happy.jpg","pugat_kota.jpg"],tr=document.getElementsByTagName("tr"),nowDate=new Date,monsterImage=document.getElementsByTagName("figure"),i=0;i<monsterImage.length-1;i++){var currentImg=document.createElement("img");currentImg.src="https://gravatar.com/avatar/"+names[i].hash+"?s=100&d=https://topheroes.github.io/img/hs/"+(10-i)+"_min.png",currentImg.alt="";var currentA=document.createElement("a");currentA.href="https://gravatar.com/avatar/"+names[i].hash+"?s=512&d=https://topheroes.github.io/img/hs/"+(10-i)+".gif",currentA.className="image-popup-no-margins",currentA.appendChild(currentImg),monsterImage[i].appendChild(currentA)}for(i=0;i<tr.length;i++){var td=tr[i].getElementsByTagName("td");td[0].innerHTML=names[0].name,td[1].innerHTML=names[0].score,names.shift()}var n=nowDate.getDate()%31;imga.src="img/memes/"+files[n],$(document).ready(function(){$(".image-popup-no-margins").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}})});