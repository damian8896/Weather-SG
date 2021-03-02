testMessageSending();
async function testMessageSending() {
  let weatherData = await sendMessage({action: "readLocal"});

  var maxTemperatureOne = 0;
  var minTemperatureOne = 100;
  var maxTemperatureTwo = 0;
  var minTemperatureTwo = 100;
  var maxTemperatureThree = 0;
  var minTemperatureThree = 100;
  var maxTemperatureFour = 0;
  var minTemperatureFour = 100;
  var i = 1;
  var firstDay = 0;
  var justSwitched = false;
  var day1 = new Date(weatherData.list[0].dt * 1000);
  if(day1.getHours() % 3 == 0){
    firstDay = (24 - day1.getHours())/3;
  }else if(day1.getHours() % 3 == 1){
    firstDay = (25 - day1.getHours())/3;
  }else{
    firstDay = (26 - day1.getHours())/3;
  }
  for(var j = 0; j < weatherData.list.length; j++){
    if(j > firstDay + 3){
      justSwitched = false;
    }
    console.log(weatherData.list[j].main.temp - 273.15);
    console.log(firstDay);
    var day = new Date(weatherData.list[j].dt * 1000);
    if(i == 1){
      if(j >= firstDay && j != 0){
        console.log("switch");
        justSwitched = true;
        i++;
      }
    }

    if(i > 1 && justSwitched == false){
      if((j - firstDay) % 8 == 1){
        console.log("switch");
        i++;
      }
    }

    if(i == 1){
      console.log(day);
      if(weatherData.list[j].main.temp - 273.15 > maxTemperatureOne)
        maxTemperatureOne = weatherData.list[j].main.temp - 273.15;
      if(weatherData.list[j].main.temp - 273.15 < minTemperatureOne)
        minTemperatureOne = weatherData.list[j].main.temp - 273.15;
      console.log(maxTemperatureOne);
    }
    if(i == 2){
      console.log(day);
      if(weatherData.list[j].main.temp - 273.15 > maxTemperatureTwo)
        maxTemperatureTwo = weatherData.list[j].main.temp - 273.15;
      if(weatherData.list[j].main.temp - 273.15 < minTemperatureTwo)
        minTemperatureTwo = weatherData.list[j].main.temp - 273.15;
      console.log(maxTemperatureTwo);
    }
    if(i == 3){
      console.log(day);
      if(weatherData.list[j].main.temp - 273.15 > maxTemperatureThree)
        maxTemperatureThree = weatherData.list[j].main.temp - 273.15;
      if(weatherData.list[j].main.temp - 273.15 < minTemperatureThree)
        minTemperatureThree = weatherData.list[j].main.temp - 273.15;
      console.log(maxTemperatureThree);
    }
    if(i == 4){
      // console.log(day);
      if(weatherData.list[j].main.temp - 273.15 > maxTemperatureFour)
        maxTemperatureFour = weatherData.list[j].main.temp - 273.15;
      if(weatherData.list[j].main.temp - 273.15 < minTemperatureFour)
        minTemperatureFour = weatherData.list[j].main.temp - 273.15;
      console.log(maxTemperatureFour);
    }
  }

  const humidityOne = weatherData.list[0].main.humidity;
  const cloudinessOne = weatherData.list[0].clouds.all;
  const dayOne = new Date(weatherData.list[0].dt * 1000);
  const dayTwo = new Date(weatherData.list[8].dt * 1000);
  const dayThree = new Date(weatherData.list[16].dt * 1000);
  const dayFour = new Date(weatherData.list[24].dt * 1000);
  const windOne = weatherData.list[0].wind.speed;
  const weatherOne = weatherData.list[0].weather[0].description;
  const temperatureOne = weatherData.list[0].main.temp - 273.15;
  const weatherTwo = weatherData.list[1].weather[0].description;
  const temperatureTwo = weatherData.list[1].main.temp - 273.15;
  const weatherThree = weatherData.list[2].weather[0].description;
  const temperatureThree = weatherData.list[2].main.temp - 273.15;

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayNames = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var iconcode = weatherData.list[0].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  console.log(iconurl);
  document.getElementById("wicon1").src = iconurl;


  var time1 = new Date(weatherData.list[1].dt * 1000);
  var time2 = new Date(weatherData.list[2].dt * 1000);

  let tempArr1 = document.getElementsByClassName("temp1");
    tempArr1[0].textContent = Math.round(temperatureOne) + "\u00b0C";
  let weatherArr1 = document.getElementsByClassName("weather1");
    weatherArr1[0].textContent = weatherOne.charAt(0).toUpperCase() + weatherOne.slice(1);

  let rainArr = document.getElementsByClassName("value1");
    rainArr[0].textContent = cloudinessOne + "%";

  let humidArr = document.getElementsByClassName("value2");
    humidArr[0].textContent = humidityOne + "%";

  let windArr = document.getElementsByClassName("value3");
    windArr[0].textContent = Math.round(windOne * 3.6)+ " km/h";

  let dayArr = document.getElementsByClassName("date-day");
    dayArr[0].textContent = dayOne.getDate() + " " + monthNames[dayOne.getMonth()] + " " + dayOne.getFullYear();

  let dayNameOneArr = document.getElementsByClassName("day-name1");
    dayNameOneArr[0].textContent = dayNames[dayOne.getDay()];
  let dayTempOneArr = document.getElementsByClassName("day-temp1");
    dayTempOneArr[0].textContent = Math.round(maxTemperatureOne) + "\u00b0C";
  let dayTempOneCArr = document.getElementsByClassName("day-tempc1");
    dayTempOneCArr[0].textContent = Math.round(minTemperatureOne) + "\u00b0C";

  let dayNameTwoArr = document.getElementsByClassName("day-name2");
    dayNameTwoArr[0].textContent = dayNames[dayTwo.getDay()];
  let dayTempTwoArr = document.getElementsByClassName("day-temp2");
    dayTempTwoArr[0].textContent = Math.round(maxTemperatureTwo) + "\u00b0C";
  let dayTempTwoCArr = document.getElementsByClassName("day-tempc2");
    dayTempTwoCArr[0].textContent = Math.round(minTemperatureTwo) + "\u00b0C";

  let dayNameThreeArr = document.getElementsByClassName("day-name3");
    dayNameThreeArr[0].textContent = dayNames[dayThree.getDay()];
  let dayTempThreeArr = document.getElementsByClassName("day-temp3");
    dayTempThreeArr[0].textContent = Math.round(maxTemperatureThree) + "\u00b0C";
  let dayTempThreeCArr = document.getElementsByClassName("day-tempc3");
   dayTempThreeCArr[0].textContent = Math.round(minTemperatureThree) + "\u00b0C";

  let dayNameFourArr = document.getElementsByClassName("day-name4");
    dayNameFourArr[0].textContent = dayNames[dayFour.getDay()];
  let dayTempFourArr = document.getElementsByClassName("day-temp4");
    dayTempFourArr[0].textContent = Math.round(maxTemperatureFour) + "\u00b0C";
  let dayTempFourCArr = document.getElementsByClassName("day-tempc4");
    dayTempFourCArr[0].textContent = Math.round(minTemperatureFour) + "\u00b0C";
}

function sendMessage(message) {
  return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, function(response) {resolve(response);});
  });
}

const weekList = document.getElementsByClassName("week-list")[0];
const listItems = weekList.querySelectorAll("li");
const listItem1 = weekList.getElementsByClassName("dayFunctionOne");
const listItem2 = weekList.getElementsByClassName("dayFunctionTwo");
const listItem3 = weekList.getElementsByClassName("dayFunctionThree");
const listItem4 = weekList.getElementsByClassName("dayFunctionFour");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

Array.prototype.forEach.call(listItem1, function (listItem1) {
  listItem1.onclick = display1;
});

Array.prototype.forEach.call(listItem2, function (listItem2) {
  listItem2.onclick = display2;
});

Array.prototype.forEach.call(listItem3, function (listItem3) {
  listItem3.onclick = display3;
});

Array.prototype.forEach.call(listItem4, function (listItem4) {
  listItem4.onclick = display4;
});

async function display1(){
  let weatherData = await sendMessage({action: "readLocal"});

  const temperature = weatherData.list[0].main.temp - 273.15;
  const humidity = weatherData.list[0].main.humidity;
  const cloudiness = weatherData.list[0].clouds.all;
  const wind = weatherData.list[0].wind.speed;
  const weather = weatherData.list[0].weather[0].description;
  const day = new Date(weatherData.list[0].dt * 1000);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayNames = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var iconcode = weatherData.list[0].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  console.log(iconurl);
  document.getElementById("wicon1").src = iconurl;

  let tempArr = document.getElementsByClassName("d-temp");
    tempArr[0].textContent = Math.round(temperature) + "\u00b0C";

  let rainArr = document.getElementsByClassName("value1");
    rainArr[0].textContent = cloudiness + "%";

  let humidArr = document.getElementsByClassName("value2");
    humidArr[0].textContent = humidity + "%";

  let windArr = document.getElementsByClassName("value3");
    windArr[0].textContent = Math.round(wind * 3.6)+ " km/h";

  let dayArr = document.getElementsByClassName("date-day");
    dayArr[0].textContent = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();

  let weatherArr = document.getElementsByClassName("weather-desc");
    weatherArr[0].textContent = weather.charAt(0).toUpperCase() + weather.slice(1);
}

async function display2(){
  let weatherData = await sendMessage({action: "readLocal"});
  var day1 = new Date(weatherData.list[0].dt * 1000);
  var firstDay = 0;
  if(day1.getHours() % 3 == 0){
    firstDay = (24 - day1.getHours())/3;
  }else if(day1.getHours() % 3 == 1){
    firstDay = (25 - day1.getHours())/3;
  }else{
    firstDay = (26 - day1.getHours())/3;
  }

  const i = firstDay+4;
  console.log(i);

  const temperature = weatherData.list[i].main.temp - 273.15;
  const humidity = weatherData.list[i].main.humidity;
  const cloudiness = weatherData.list[i].clouds.all;
  const wind = weatherData.list[i].wind.speed;
  const weather = weatherData.list[i].weather[0].description;
  const day = new Date(weatherData.list[i].dt * 1000);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayNames = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var iconcode = weatherData.list[i].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  console.log(iconurl);
  document.getElementById("wicon1").src = iconurl;

  let tempArr = document.getElementsByClassName("d-temp");
    tempArr[0].textContent = Math.round(temperature) + "\u00b0C";

  let rainArr = document.getElementsByClassName("value1");
    rainArr[0].textContent = cloudiness + "%";

  let humidArr = document.getElementsByClassName("value2");
    humidArr[0].textContent = humidity + "%";

  let windArr = document.getElementsByClassName("value3");
    windArr[0].textContent = Math.round(wind * 3.6)+ " km/h";

  let dayArr = document.getElementsByClassName("date-day");
    dayArr[0].textContent = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();

  let weatherArr = document.getElementsByClassName("weather-desc");
    weatherArr[0].textContent = weather.charAt(0).toUpperCase() + weather.slice(1);
}

async function display3(){
  let weatherData = await sendMessage({action: "readLocal"});
  var day1 = new Date(weatherData.list[0].dt * 1000);
  var firstDay = 0;
  if(day1.getHours() % 3 == 0){
    firstDay = (24 - day1.getHours())/3;
  }else if(day1.getHours() % 3 == 1){
    firstDay = (25 - day1.getHours())/3;
  }else{
    firstDay = (26 - day1.getHours())/3;
  }

  const i = firstDay+12;
  console.log(i);

  const temperature = weatherData.list[i].main.temp - 273.15;
  const humidity = weatherData.list[i].main.humidity;
  const cloudiness = weatherData.list[i].clouds.all;
  const wind = weatherData.list[i].wind.speed;
  const weather = weatherData.list[i].weather[0].description;
  const day = new Date(weatherData.list[i].dt * 1000);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayNames = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var iconcode = weatherData.list[i].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  console.log(iconurl);
  document.getElementById("wicon1").src = iconurl;

  let tempArr = document.getElementsByClassName("d-temp");
    tempArr[0].textContent = Math.round(temperature) + "\u00b0C";

  let rainArr = document.getElementsByClassName("value1");
    rainArr[0].textContent = cloudiness + "%";

  let humidArr = document.getElementsByClassName("value2");
    humidArr[0].textContent = humidity + "%";

  let windArr = document.getElementsByClassName("value3");
    windArr[0].textContent = Math.round(wind * 3.6)+ " km/h";

  let dayArr = document.getElementsByClassName("date-day");
    dayArr[0].textContent = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();

  let weatherArr = document.getElementsByClassName("weather-desc");
    weatherArr[0].textContent = weather.charAt(0).toUpperCase() + weather.slice(1);
}

async function display4(){
  let weatherData = await sendMessage({action: "readLocal"});
  var day1 = new Date(weatherData.list[0].dt * 1000);
  var firstDay = 0;
  if(day1.getHours() % 3 == 0){
    firstDay = (24 - day1.getHours())/3;
  }else if(day1.getHours() % 3 == 1){
    firstDay = (25 - day1.getHours())/3;
  }else{
    firstDay = (26 - day1.getHours())/3;
  }

  const i = firstDay+20;
  console.log(i);

  const temperature = weatherData.list[i].main.temp - 273.15;
  const humidity = weatherData.list[i].main.humidity;
  const cloudiness = weatherData.list[i].clouds.all;
  const wind = weatherData.list[i].wind.speed;
  const weather = weatherData.list[i].weather[0].description;
  const day = new Date(weatherData.list[i].dt * 1000);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayNames = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var iconcode = weatherData.list[i].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  console.log(iconurl);
  document.getElementById("wicon1").src = iconurl;

  let tempArr = document.getElementsByClassName("d-temp");
    tempArr[0].textContent = Math.round(temperature) + "\u00b0C";

  let rainArr = document.getElementsByClassName("value1");
    rainArr[0].textContent = cloudiness + "%";

  let humidArr = document.getElementsByClassName("value2");
    humidArr[0].textContent = humidity + "%";

  let windArr = document.getElementsByClassName("value3");
    windArr[0].textContent = Math.round(wind * 3.6)+ " km/h";

  let dayArr = document.getElementsByClassName("date-day");
    dayArr[0].textContent = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();

  let weatherArr = document.getElementsByClassName("weather-desc");
    weatherArr[0].textContent = weather.charAt(0).toUpperCase() + weather.slice(1);
}
