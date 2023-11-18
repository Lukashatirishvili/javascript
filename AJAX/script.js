const request = new XMLHttpRequest();

request.open("GET", "https://api.weather.gov/gridpoints/TOP/32,81/forecast");
request.send();

request.onload = () => {
  const data = JSON.parse(request.responseText);
};
