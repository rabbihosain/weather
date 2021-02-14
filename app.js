//Init UI
const ui = new UI;

//Fetch City From IP

async function getCity() {
	const city = await fetch('http://api.ipapi.com/api/check?access_key=eb1bf8fdb7cc7bd1cafba14ee901c618');
	const data =await city.json();
	return data;
}

getCity().then(data => {
	//Init weather
	const weather = new Weather(data.city);
	weather.getWeather().then(data=> {
		console.log(data);
		ui.paint(data);
	}).catch(err => {
		console.log(err);
		ui.notFouond();
	});
});

document.getElementById('w-change-btn').addEventListener('click', ()=>{
	const city = document.getElementById('city').value;
	if(city === ''){
		alert('You must need enter valid city name.')
	}else{
		//Init weather
	const weather = new Weather(city);
	weather.getWeather().then(data=> {
		console.log(data);
		ui.paint(data);
	}).catch(err => {
		console.log(err);
		ui.notFouond();
	});
	}
});