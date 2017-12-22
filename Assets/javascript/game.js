var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);

/**Random Crystal Power**/
var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var Calculate = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
	$('.math').append(math);

}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    Calculate();
}
var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		Calculate();
}}

	$('.math').append(math);
	$('.number').append(number);

	$(document).ready(function(){
	$('#blue').click(function(){
		math = math + red;
		config();
	})
	$('#red').click(function(){
		math  = math  + blue;
		config();
	})
	$('#purple').click(function(){
		math  = math  + purple;
		config();
	})
	$('#green').click(function(){
		math  = math  + green;
		config();
	})
});













