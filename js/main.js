function GetHTML(url)
{
	var xml = new XMLHttpRequest();
	xml.open("GET", url, false);
	xml.send(null);
	return xml.responseText;
}

jQuery.getScript("js/generated.js", function ()
{
	$(".title span").html("Обновлено: " + generatedDate.date);

	var classes = [
		" first",
		" second",
		" third",
	]
	var avatar = "";

	for (var i = 0; i < names.length; i++)
	{
		if (names[i].hash === "1a75fba0adf3d0e7d75b1c247cb65305")
		{
			temp_avatar = "https://cms.paladins.com/wp-content/uploads/2018/11/image5.gif";
			avatar = temp_avatar;
		}
		else
		{
			temp_avatar = "https://gravatar.com/avatar/" + names[i].hash + "?s=128&d=https://topheroes.github.io/img/hs/" + i + "_min.png";
			avatar = "https://gravatar.com/avatar/" + names[i].hash + "?s=512&d=https://topheroes.github.io/img/hs/" + i + ".gif";
		}

		$("table").append("<tr class=\"row" + (classes[i] || "") + "\"><td class=\"place\">" + (i + 1) + "</td><td class=\"name\">" + names[i].name + "</td><td class=\"courses-done\">" + names[i].score + "</td><td class=\"avatar\"><a href=\"" + avatar + "\" class=\"image-popup-no-margins\"><img width=128 height=128 src=\"" + temp_avatar + "\"></a></td></tr>");
	}
	var memes_arr = ["bobcat.jpg", "cat_angry.png", "cat_demon.jpg", "cat_sitkh.jpeg", "cat_smile2.jpg", "cat_squarrel.jpeg", "cat_wat.jpg", "cat_weather.jpeg", "cat_who_me.jpeg", "cute_goat.jpg", "die.jpg", "diet.jpg", "dog coat gun.jpg", "dog_bear.gif", "donttouch.jpg", "drum cat.gif", "ehehe.jpg", "evil_dog.jpg", "fox_plays.gif", "nazivaet_nyashkoi.jpg", "sea-lion.gif", "sharik_gde_tabletki.jpg", "teeth.jpg", "terpenie.jpg", "tiho.jpg", "tolko_v_ad.jpg", "twitter_serialy_eda.jpg", "vivod.jpeg", "viy.jpeg", "vse_horosho.jpg", "yoga_dog.gif"]

	var date = new Date();
	var day = date.getDate() % 31;
	$("#picture").attr("src", "img/memes/" + memes_arr[day]);

	$("#random-cat").click(function ()
	{
		var cat = JSON.parse(GetHTML("https://api.thecatapi.com/v1/images/search?format=json"))[0];
		console.log(cat.url)
		$("#picture").attr("src", cat.url);
		$("#picture-title").html("Ня! Котики!");
	});
	$("#restore").click(function ()
	{
		$("#picture").attr("src", "img/memes/" + memes_arr[day]);
		$("#picture-title").html("Картинка дня");
	});

	$(document).ready(function()
	{
		$(".image-popup-no-margins").magnificPopup(
		{
			type: "image",
			closeOnContentClick: !0,
			closeBtnInside: !1,
			fixedContentPos: !0,
			mainClass: "mfp-no-margins mfp-with-zoom",
			image:
			{
				verticalFit: !0
			},
			zoom:
			{
				enabled: !0,
				duration: 300
			}
		})
	})
});

/*jQuery.getScript("js/generated.js", function ()
{
	for (var e = document.getElementsByTagName("tr"), a = new Date, t = document.getElementsByTagName("figure"), n = 0; n < t.length - 1; n++)
	{
		var i = document.createElement("img");
		i.src = "https://gravatar.com/avatar/" + names[n].hash + "?s=100&d=https://topheroes.github.io/img/hs/" + (10 - n) + "_min.png", i.alt = "";
		var r = document.createElement("a");
		r.href = "https://gravatar.com/avatar/" + names[n].hash + "?s=512&d=https://topheroes.github.io/img/hs/" + (10 - n) + ".gif", r.className = "image-popup-no-margins", r.appendChild(i), t[n].appendChild(r)
	}
	$(".title time").replaceWith("<span style='color:" + generatedDate.color + ";'>обновлено " + generatedDate.date + "</span>");
	for (n = 0; n < e.length; n++)
	{
		var s = e[n].getElementsByTagName("td");
		s[0].innerHTML = names[0].name, s[1].innerHTML = names[0].score, names.shift()
	}
	var o = a.getDate() % 31;
	imga.src = "img/memes/" + ["bobcat.jpg", "cat_angry.png", "cat_demon.jpg", "cat_sitkh.jpeg", "cat_smile2.jpg", "cat_squarrel.jpeg", "cat_wat.jpg", "cat_weather.jpeg", "cat_who_me.jpeg", "cute_goat.jpg", "die.jpg", "diet.jpg", "dog coat gun.jpg", "dog_bear.gif", "donttouch.jpg", "drum cat.gif", "ehehe.jpg", "evil_dog.jpg", "fox_plays.gif", "nazivaet_nyashkoi.jpg", "sea-lion.gif", "sharik_gde_tabletki.jpg", "teeth.jpg", "terpenie.jpg", "tiho.jpg", "tolko_v_ad.jpg", "twitter_serialy_eda.jpg", "vivod.jpeg", "viy.jpeg", "vse_horosho.jpg", "yoga_dog.gif"][o], $(document).ready(function ()
	{
		$(".image-popup-no-margins").magnificPopup(
		{
			type: "image",
			closeOnContentClick: !0,
			closeBtnInside: !1,
			fixedContentPos: !0,
			mainClass: "mfp-no-margins mfp-with-zoom",
			image:
			{
				verticalFit: !0
			},
			zoom:
			{
				enabled: !0,
				duration: 300
			}
		})
	})
});*/
for (var handler, canvas = document.getElementById("canvas"), context = canvas.getContext("2d"), maxFlakes = 40, repeats = 0, height = 0, snowflakes = [], i = 0; i < maxFlakes; i++)
{
	var radius = -i * i + 10;
	snowflakes[i] = {
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		radius: 0 < radius ? radius : 7 * Math.random() + 1
	}
}

function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height), repeats++;
	for (var e = 0; e < maxFlakes; e++)
	{
		var a = snowflakes[e];
		a.x > canvas.width + a.radius ? a.x = 1.5 * -a.radius : a.x += 1.5 * a.radius, a.y > canvas.height + a.radius ? a.y = -a.radius : a.y += a.radius, context.beginPath();
		var t = 1.1 - a.radius / 10;
		context.fillStyle = "rgba(255, 255, 255, " + t + ")", context.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !1), context.fill()
	}
}

function resize()
{
	canvas.width = window.innerWidth, canvas.height = window.innerHeight, draw()
}
handler = setInterval(draw, 30), resize(), window.addEventListener("resize", resize, !1);
