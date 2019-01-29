

 setTimeout(function(){ 

	var images = document.images,
		images_length = images.length,
		images_loaded = 0;



	for(var i = 0; i < images_length; i++){

		var cur_img = new Image();
		cur_img.src = images[i].src;
		cur_img.onload = oneLoaded;
		cur_img.onerror = oneLoaded;

	}

	

	function oneLoaded(){

		

		if( (++images_loaded) >= images_length){
			done();
		}


	}


}, 1000);




 function done(){


	

		var preloader = document.getElementById("ppreloader");
		if( !preloader.classList.contains("done"))
		{

			preloader.classList.add("done");

		}
	

}