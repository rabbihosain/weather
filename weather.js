class Weather {
	constructor(city){
		this.city = city;
		this.appid = '69857b0a3d26be9e3cb1b437802bb300';
	}


	//Fetch Weather info from api
	async getWeather (){
		const resData =await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();
		

		return resData;
	}

}
