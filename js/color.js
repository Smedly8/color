const slider1 = document.querySelector('.cl-1');
const slider2 = document.querySelector('.cl-2');
const slider3 = document.querySelector('.cl-3');

const ind1 = document.querySelector('.cli-1');
const ind2 = document.querySelector('.cli-2');
const ind3 = document.querySelector('.cli-3');

var actSlider = document.querySelector('.parrent');

mouseOn = false;
var red = 0;
var green = 0;
var blue = 0;

var oldRed = 0;
var oldGreen = 0;
var oldBlue = 0;

var startMouse;

const body = document.querySelector("body")
const parrent = document.querySelector(".parrent")
const all = document.querySelector("html")
const tab = document.querySelector(".tab")
console.log(tab)


function setHeight(){
	var height = document.documentElement.clientHeight;
	console.log("h"+height)
	all.style.maxHeight = `${height}px`;
	tab.innerHTML = height;
}
setHeight()

all.addEventListener("touchmove", setHeight)
all.addEventListener("mo")

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}

if (is_touch_device()){
	document.addEventListener("touchstart", function(event){

		tab.innerHTML = document.documentElement.clientHeight;

		event.preventDefault();
		if (event.target.closest(".color-slider")){

			mouseOn = true;
			actSlider = event.target;
			console.log(event.clientY)
			startMouse = (255-Math.round(event.touches[0].pageY-slider1.getBoundingClientRect().top));
			all.addEventListener("touchmove", function (event) {

				if(mouseOn) {
					actual = (255-Math.round(event.touches[0].pageY-actSlider.getBoundingClientRect().top));
					diff = actual-startMouse;
					console.log("diff",diff)

					if(actSlider.closest(".cl-1")){
						red = oldRed+diff;
						if(red<0){red = 0};
						if(red>255){red = 255};
						//slider1.innerHTML =  `${red}`;
						ind1.style.background = `rgb(${red}, 0, 0)`;
						ind1.style.height = `${red}`+"px";
						setColor(red, green, blue);
					}

					if(actSlider.closest(".cl-2")){
						green = oldGreen+diff;
						if(green<0){green = 0};
						if(green>255){green = 255};
						//slider1.innerHTML =  `${red}`;
						ind2.style.background = `rgb(0, ${green}, 0)`;
						ind2.style.height = `${green}`+"px";
						setColor(red, green, blue);
					}

					if(actSlider.closest(".cl-3")){
						blue = oldBlue+diff;
						if(blue<0){blue = 0};
						if(blue>255){blue = 255};
						//slider1.innerHTML =  `${red}`;
						ind3.style.background = `rgb(0, 0, ${blue})`;
						ind3.style.height = `${blue}`+"px";
						setColor(red, green, blue);
					}
				}
			});
		}
	}, false)

	document.addEventListener("touchend", function(event){
		console.log("TouchEnd!!!!!!!!!!!!!!!!!!!!!!!!")
		mouseOn = false;
		oldRed = red;
		oldGreen = green;
		oldBlue = blue;
		actSlider = document.querySelector('.parrent');
		console.log(mouseOn);
	});
} //Touch version End


//PC version________________________________________________________________________________________________


document.addEventListener("mousedown", function(event){
	console.log(event.clientY, slider1.getBoundingClientRect().bottom, slider1.getBoundingClientRect().top)
	if (event.target.closest(".color-slider")){
		mouseOn = true;
		actSlider = event.target;
		console.log(actSlider);
		startMouse = (255-Math.round(event.clientY-slider1.getBoundingClientRect().top));
	all.addEventListener("mousemove", function (event) {
			if(mouseOn) {
				actual = (255-Math.round(event.clientY-actSlider.getBoundingClientRect().top));
				diff = actual-startMouse;

				if(actSlider.closest(".cl-1")){
					red = oldRed+diff;
					if(red<0){red = 0};
					if(red>255){red = 255};
					//slider1.innerHTML =  `${red}`;
					ind1.style.background = `rgb(${red}, 0, 0)`;
					ind1.style.height = `${red}`+"px";
					setColor(red, green, blue);
				}

				if(actSlider.closest(".cl-2")){
					green = oldGreen+diff;
					if(green<0){green = 0};
					if(green>255){green = 255};
					//slider1.innerHTML =  `${red}`;
					ind2.style.background = `rgb(0, ${green}, 0)`;
					ind2.style.height = `${green}`+"px";
					setColor(red, green, blue);
				}

				if(actSlider.closest(".cl-3")){
					blue = oldBlue+diff;
					if(blue<0){blue = 0};
					if(blue>255){blue = 255};
					//slider1.innerHTML =  `${red}`;
					ind3.style.background = `rgb(0, 0, ${blue})`;
					ind3.style.height = `${blue}`+"px";
					setColor(red, green, blue);
				}
			}
		});
	}
});

document.addEventListener("mouseup", function(event){
	mouseOn = false;
	oldRed = red;
	oldGreen = green;
	oldBlue = blue;
	actSlider = document.querySelector('.parrent');
	console.log(mouseOn);
});

function setColor(red, green, blue){
	parrent.style.background = `linear-gradient(rgb(${red}, ${green}, ${blue}), white)`;
	//console.log("setColor")
}



/*
if(actSlider){
actSlider.addEventListener("mousemove", function (event) {
	if(mouseOn) {
		actual = (255-Math.round(event.clientY-actSlider.getBoundingClientRect().top));
		diff = actual-startMouse;
		red = oldRed+diff;
		if(red<0){red = 0};
		if(red>255){red = 255};
		//slider1.innerHTML =  `${red}`;
		ind1.style.background = `rgb(${red}, 0, 0)`;
		ind1.style.height = `${red}`+"px";
		setColor(red, green, blue);
		
		//console.log("diff "+startMouse,actual);
		//console.log(actual-startMouse);
		//console.log(red)

	}
});
}
	

slider1.addEventListener("mousemove", function (event) {

	if(mouseOn) {
		actual = (255-Math.round(event.clientY-slider1.getBoundingClientRect().top));
		diff = actual-startMouse;
		red = oldRed+diff;
		if(red<0){red = 0};
		if(red>255){red = 255};
		//slider1.innerHTML =  `${red}`;	
		ind1.style.background = `rgb(${red}, 0, 0)`;
		ind1.style.height = `${red}`+"px";
		setColor(red, green, blue);
		
		//console.log("diff "+startMouse,actual);
		//console.log(actual-startMouse);
		//console.log(red)

	}
});


slider2.addEventListener("mousemove", function (event) {
	if(mouseOn) {
		actual = (255-Math.round(event.clientY-slider1.getBoundingClientRect().top));
		diff = actual-startMouse;
		green = oldGreen+diff;
		if(green<0){green = 0};
		if(green>255){green = 255};
		//slider1.innerHTML =  `${red}`;	
		ind2.style.background = `rgb(0, ${green}, 0)`;
		ind2.style.height = `${green}`+"px";
		setColor(red, green, blue);
	}
});

slider3.addEventListener("mousemove", function (event) {
	if(mouseOn) {
		actual = (255-Math.round(event.clientY-slider1.getBoundingClientRect().top));
		diff = actual-startMouse;
		blue = oldBlue+diff;
		if(blue<0){blue = 0};
		if(blue>255){blue = 255};	
		ind3	.style.background = `rgb(0, 0, ${blue})`;
		ind3.style.height = `${blue}`+"px";
		setColor(red, green, blue);	
	}
});
*/
