function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		var kelvin = weather.main.temp
		var farenheit = (kelvin - 273.15)* 1.8000 + 32.00
		console.log(weather);
		var template=`<p>${farenheit}
		<p>${weather.name}</p>`
		//What can you do with this weather object?
		
		document.getElementById('weather').innerHTML=template 
	})

}
