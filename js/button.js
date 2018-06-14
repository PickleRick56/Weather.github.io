 var logo=document.getElementById("name");
        var pas=document.getElementById("password");
        var accessBase = {user1:{name:"niga",
                                password:"niga"},
                         user2:{name:"admin",
                               password:123}
                        };
        
        var weatherButton= document.getElementById("formButton");
        weatherButton.addEventListener('click', pushFunction);
        
        function pushFunction(){
       console.log(logo.value);
            for(var key in accessBase){
               if(accessBase[key].name=== logo.value && accessBase[key].password== pas.value){
                   
                    windows_content.innerHTML=logo.value;
                     windows.removeAttribute('style');
                 
               }
            }
        }
                
                
                
                
                
                
        
    var selectedValue = document.getElementById("selectCity");
       selectedValue.addEventListener("change", reciveWeather);
        
       function reciveWeather(){
            var weather_img; // переменная для меган
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+selectedValue.value+'&APPID=99645014e9e3a32f1552c2e9100fcd54', true);
        xhr.send();

        xhr.onreadystatechange = function() {
            console.log(xhr.readyState);
            if (xhr.readyState !== 4) {
                return;
            }
            //xhr.readyState
            //0 - запрос не инициализирован
            //1 - загрузка данных
            //2 - запрос принят
            //3 - идет обмен данными
            //4 - запрос выполнен

            if (xhr.status !== 200) {
                console.log('Error', xhr.status, xhr.statusText);
            } else {
                console.log('ok', xhr.responseText);
                var myItems = JSON.parse(xhr.responseText);
                console.log(myItems);

                weather_temperature.innerHTML = "Температура сегодня: " + Math.round(myItems.main.temp - 273) + " °C";
                weather_pressure.innerHTML = " Давление: " + (myItems.main.pressure * 0.75) + " мм рт. ст.";
                weather_humidity.innerHTML = "Влажность: " + Math.round(myItems.main.humidity) + "%";
                weather_icon.style.backgroundImage = "url('https://openweathermap.org/img/w/" + myItems.weather[0].icon + ".png')";
                weather_speed.innerHTML= "Скорость ветра "+myItems.wind.speed+ " м/с"
               
            }
            
             if(Math.round(myItems.main.temp - 273)>=20){
                    weather_img=1;
                }
                else if(Math.round(myItems.main.temp - 273)<20 && Math.round(myItems.main.temp - 273)>=10){
                     weather_img=2;
                }else if(Math.round(myItems.main.temp - 273)<10 && Math.round(myItems.main.temp - 273)>=0 ){
                     weather_img=3;
                }else{
                     weather_img=4;
                }
           
            weaweather_wear_img.src="img/weather" + weather_img + ".jpg";
        };
       }

        
            window.onload = function () {
            reciveWeather();
}
