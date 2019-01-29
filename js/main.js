

 jQuery.getScript("js/generated.js", function()
{



var files = ["bobcat.jpg", "cat_angry.png", "cat_demon.jpg", "cat_sitkh.jpeg", "cat_smile2.jpg", "cat_squarrel.jpeg", "cat_wat.jpg", "cat_weather.jpeg", "cat_who_me.jpeg", "cute_goat.jpg", "die.jpg", "diet.jpg", "dog coat gun.jpg", "dog_bear.gif", "donttouch.jpg", "drum cat.gif", "ehehe.jpg", "evil_dog.jpg", "fox_plays.gif", "nazivaet_nyashkoi.jpg", "sea-lion.gif", "sharik_gde_tabletki.jpg", "teeth.jpg", "terpenie.jpg", "tiho.jpg", "tolko_v_ad.jpg", "twitter_serialy_eda.jpg", "vivod.jpeg", "viy.jpeg", "vse_horosho.jpg", "yoga_dog.gif"];





var tr = document.getElementsByTagName("tr");
var nowDate = new Date();



var monsterImage = document.getElementsByTagName("figure");


for(var i =  0; i < monsterImage.length - 1 ;  i++)
{


	var currentImg = document.createElement("img");
	currentImg.src = "https://gravatar.com/avatar/" + names[i].hash + "?s=100&d=" +  "https://topheroes.github.io/img/hs/"+(10 - i)+"_min.png";
	currentImg.alt = "";

	var currentA = document.createElement("a");
	currentA.href = "https://gravatar.com/avatar/" + names[i].hash + "?s=512&d=" +  "https://topheroes.github.io/img/hs/"+(10 - i)+".gif";
	currentA.className = "image-popup-no-margins";


	currentA.appendChild(currentImg);

	monsterImage[i].appendChild(currentA);



}


$("table caption b span").replaceWith("<span style='color:"+generatedDate.color+";'>обновлено " + generatedDate.date + "</span>");


for(var i = 0; i < tr.length; i++ )
{

	
	var td = tr[i].getElementsByTagName('td');
	
	td[0].innerHTML = names[0].name;
	td[1].innerHTML = names[0].score;
	names.shift();

}


var n = nowDate.getDate()%31;
imga.src = "img/memes/"+files[n]; 


$(document).ready(function() {

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});



});


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var maxFlakes = 40, repeats = 0, handler;


var height = 0;

var snowflakes = [];
for (var i = 0; i < maxFlakes; i++) {
  var radius = -(i*i) + 10;
  snowflakes[i] = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: radius > 0 ? radius : Math.random() * 7 + 1
  };
}

function draw() {

 	
context.clearRect(0, 0, canvas.width, canvas.height);

 repeats++;

  for (var i = 0; i < maxFlakes; i++) {
    





    var flake = snowflakes[i];


		
	

    if (flake.x > canvas.width + flake.radius) {
      flake.x = -flake.radius * 1.5;
    } else {
      flake.x += flake.radius * 1.5;
    }
    if (flake.y > canvas.height + flake.radius) {
      flake.y = -flake.radius;
    } else {
      flake.y += flake.radius;
    }
    context.beginPath();
    var opacity = 1.1 - flake.radius / 10;
    context.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
    context.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI, false);
    context.fill();
  }

	
	

	
}

handler = setInterval(draw, 30);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

resize();

window.addEventListener('resize', resize, false);
