let cityName = 'yangon';
let language = 'EN';

$('.city-name').change(function() {
  cityName = $('.city-name').val();
  
  getWeather();
})

$('.language').change(function() {
  language = $('.language').val();
  
  getWeather();
})

function getWeather() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://open-weather13.p.rapidapi.com/city/${cityName}/${language}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': '23fa9c21ebmshd43f97f32787e28p1d69a5jsn7bb7e30f90b7',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };
  
  $.ajax(settings).done(function (response) {
    // console.log(response);

    const weather = response.weather[0];
    // const weatherIconCode = response.weather.icon;
    // const iconUrl = `https://open-weather13.p.rapidapi.com/city/${weatherIconCode}@2x.png`;
    // console.log(weather.main);
    // console.log(weather.description);
    $('.main').text(weather.main);
    $('.description').text(weather.description);
    // $('.icon'),attr('src', iconUrl);
  });
}
getWeather();
